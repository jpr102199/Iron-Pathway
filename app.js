// DATE DISPLAY

document.getElementById("date").innerText =
new Date().toDateString();


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
let workoutTitle="";


if(day===1){

workoutTitle="Chest & Back";

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

workoutTitle="Shoulders & Arms";

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

workoutTitle="Leg Day";

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

container.innerHTML="<p>Recovery day.</p>";

localStorage.setItem("workoutDay",1);

return;

}

workoutList.innerHTML=`<li><strong>${workoutTitle}</strong></li>`;

exercises.forEach(exercise=>{

let previousWeight =
localStorage.getItem(exercise) || "";

container.innerHTML +=

`<div class="exercise-card">

<h3>${exercise}</h3>

<input id="${exercise}" placeholder="Weight" value="${previousWeight}">

<input placeholder="Reps">

<button onclick="logLift('${exercise}')">Save Lift</button>

</div>`;

});

day++;

localStorage.setItem("workoutDay",day);

}


// PROGRESSIVE OVERLOAD TRACKING

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


// WEIGHT TRACKER

function addWeight(){

let weight =
document.getElementById("weightEntry").value;

if(!weight) return;

let weights =
JSON.parse(localStorage.getItem("weights") || "[]");

let dates =
JSON.parse(localStorage.getItem("dates") || "[]");

weights.push(weight);

let today =
new Date().toLocaleDateString();

dates.push(today);

localStorage.setItem("weights",JSON.stringify(weights));
localStorage.setItem("dates",JSON.stringify(dates));

updateChart();

document.getElementById("weightEntry").value="";

}


// WEIGHT GRAPH

function updateChart(){

let weights =
JSON.parse(localStorage.getItem("weights") || "[]");

let dates =
JSON.parse(localStorage.getItem("dates") || "[]");

const ctx =
document.getElementById("progressChart");

if(!ctx) return;

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
y:{
ticks:{color:'white'}
},
x:{
ticks:{color:'white'}
}
}

}

});

}


// LOAD GRAPH WHEN APP OPENS

updateChart();
