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

const workoutList =
document.getElementById("todayWorkout")

const container =
document.getElementById("exerciseContainer")

workoutList.innerHTML=""
container.innerHTML=""

for(let i=0;i<4;i++){

let exercise =
exercises[Math.floor(Math.random()*exercises.length)]

workoutList.innerHTML+=`<li>${exercise}</li>`

container.innerHTML+=`

<div class="card">

<h3>${exercise}</h3>

<input placeholder="Weight">

<input placeholder="Reps">

<button onclick="completeSet()">Log Set</button>

</div>

`

}

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
