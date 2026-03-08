document.getElementById("date").innerText =
new Date().toDateString()

const exercises = [
"Lat Pulldown",
"Seated Row",
"Back Extension",
"Face Pull",
"Leg Press",
"Hamstring Curl",
"Chest Press",
"Shoulder Press"
]

function showTab(tab){

document.querySelectorAll(".tab")
.forEach(t => t.style.display="none")

document.getElementById(tab).style.display="block"

}

function generateWorkout(){

let day =
localStorage.getItem("workoutDay") || 1

const workoutList =
document.getElementById("todayWorkout")

const container =
document.getElementById("exerciseContainer")

workoutList.innerHTML=""
container.innerHTML=""

let exercises=[]

if(day==1){

exercises=[
"Incline Bench Press",
"Flat Dumbbell Press",
"Chest Fly",
"Lat Pulldown",
"Seated Cable Row",
"Back Extension"
]

}

if(day==2){

exercises=[
"Shoulder Press",
"Lateral Raise",
"Rear Delt Fly",
"Barbell Curl",
"Hammer Curl",
"Tricep Pushdown"
]

}

if(day==3){

exercises=[
"Leg Press",
"Hamstring Curl",
"Leg Extension",
"Calf Raises",
"Glute Bridge",
"Back Extension"
]

}

if(day==4){

workoutList.innerHTML="<li>Rest Day</li>"

container.innerHTML="<p>Recovery Day</p>"

day=1

localStorage.setItem("workoutDay",day)

return

}

exercises.forEach(exercise=>{

workoutList.innerHTML += `<li>${exercise}</li>`

container.innerHTML +=

`<div class="exercise-card">

<h3>${exercise}</h3>

<input placeholder="Weight">

<input placeholder="Reps">

<button onclick="completeSet()">Complete Set</button>

</div>`

})

day++

localStorage.setItem("workoutDay",day)

}

function completeSet(){

let streak =
localStorage.getItem("streak") || 0

streak++

localStorage.setItem("streak",streak)

document.getElementById("streak").innerText=streak

}

function saveWeight(){

let weight =
document.getElementById("weightInput").value

let weights =
JSON.parse(localStorage.getItem("weights") || "[]")

weights.push(weight)

localStorage.setItem("weights",JSON.stringify(weights))

updateChart()

}

function saveProtein(){

let protein =
document.getElementById("proteinInput").value

localStorage.setItem("protein",protein)

}

function saveCalories(){

let calories =
document.getElementById("caloriesInput").value

localStorage.setItem("calories",calories)

}

function updateChart(){

let weights =
JSON.parse(localStorage.getItem("weights") || "[]")

const ctx =
document.getElementById("progressChart")

new Chart(ctx,{
type:'line',
data:{
labels:weights.map((_,i)=>`Entry ${i+1}`),
datasets:[{
label:'Weight',
data:weights
}]
}
})

}

updateChart()
