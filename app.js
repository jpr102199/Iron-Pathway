// WAIT UNTIL PAGE LOADS

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("date").innerText =
new Date().toDateString();

updateChart();

});

// TAB NAVIGATION

function showTab(tab){

document.querySelectorAll(".tab")
.forEach(t => t.style.display="none");

document.getElementById(tab).style.display="block";

}

// WORKOUT GENERATOR

function generateWorkout(){

let day =
parseInt(localStorage.getItem("workoutDay")) || 1;

const workoutList =
document.getElementById("todayWorkout");

const container =
document.getElementById("exerciseContainer");

workoutList.innerHTML="";
container.innerHTML="";

let exercises=[];
let title="";

if(day===1){

title="Chest & Back";

exercises=[
"Incline Bench Press",
"Flat Dumbbell Press",
"Chest Fly",
"Lat Pulldown",
"Seated Cable Row",
"Back Extension"
];

}

else if(day===2){

title="Shoulders & Arms";

exercises=[
"Shoulder Press",
"Lateral Raise",
"Rear Delt Fly",
"Barbell Curl",
"Hammer Curl",
"Tricep Pushdown"
];

}

else if(day===3){

title="Leg Day";

exercises=[
"Leg Press",
"Hamstring Curl",
"Leg Extension",
"Standing Calf Raise",
"Glute Bridge",
"Back Extension"
];

}

else{

workoutList.innerHTML="<li>Rest Day</li>";
container.innerHTML="<p>Recovery day</p>";

localStorage.setItem("workoutDay",1);
return;

}

workoutList.innerHTML=`<li><strong>${title}</strong></li>`;

exercises.forEach(exercise=>{

let prevWeight =
localStorage.getItem(exercise) || "";

container.innerHTML +=

`<div class="exercise-card">

<h3>${exercise}</h3>

<input id="${exercise}" placeholder="Weight" value="${prevWeight}">

<input placeholder="Reps">

<button onclick="logLift('${exercise}')">Save Lift</button>

</div>`;

});

day++;

localStorage.setItem("workoutDay",day);

}

// SAVE LIFT

function logLift(exercise){

let weight =
document.getElementById(exercise).value;

if(!weight) return;

let previous =
parseFloat(localStorage.getItem(exercise)) || 0;

let newWeight =
parseFloat(weight);

if(newWeight > previous){

alert("New Personal Record 💪");

}

localStorage.setItem(exercise,newWeight);

}

// ADD WEIGHT ENTRY

function addWeight(){

let weight =
document.getElementById("weightEntry").value;

if(!weight) return;

let weights =
JSON.parse(localStorage.getItem("weights") || "[]");

let dates =
JSON.parse(localStorage.getItem("dates") || "[]");

weights.push(parseFloat(weight));

let today =
new Date().toLocaleDateString();

dates.push(today);

localStorage.setItem("weights",JSON.stringify(weights));
localStorage.setItem("dates",JSON.stringify(dates));

document.getElementById("weightEntry").value="";

updateChart();

predictGoal();

}

// UPDATE GRAPH

function updateChart(){

let weights =
JSON.parse(localStorage.getItem("weights") || "[]");

let dates =
JSON.parse(localStorage.getItem("dates") || "[]");

const ctx =
document.getElementById("progressChart");

if(!ctx || weights.length===0) return;

new Chart(ctx,{

type:'line',

data:{

labels:dates,

datasets:[{

label:'Body Weight',

data:weights,

borderColor:'#2f6df6',

backgroundColor:'rgba(47,109,246,0.3)',

fill:true,

tension:0.3

}]

},

options:{

plugins:{
legend:{display:false}
},

scales:{
y:{ticks:{color:'white'}},
x:{ticks:{color:'white'}}
}

}

});

}

// GOAL PREDICTION

function predictGoal(){

let weights =
JSON.parse(localStorage.getItem("weights") || "[]");

if(weights.length < 2) return;

let start =
weights[0];

let latest =
weights[weights.length-1];

let change =
start - latest;

let weeks =
weights.length;

let weeklyLoss =
change / weeks;

if(weeklyLoss <= 0) return;

let goal = 247;

let remaining =
latest - goal;

let weeksLeft =
Math.ceil(remaining / weeklyLoss);

let result =
document.getElementById("goalPrediction");

if(result){

result.innerText =
"Estimated goal in " + weeksLeft + " weeks";

}

}
