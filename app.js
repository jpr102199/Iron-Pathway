document.getElementById("date").innerText =
new Date().toDateString();

function startWorkout(){

alert("Workout Started 💪");

}

function saveWeight(){

let weight =
document.getElementById("weight").value;

localStorage.setItem("weight",weight);

alert("Weight Saved");

}

function saveStats(){

let calories =
document.getElementById("calories").value;

let protein =
document.getElementById("protein").value;

localStorage.setItem("calories",calories);

localStorage.setItem("protein",protein);

alert("Stats Saved");

}

function showTab(tab){

document.querySelectorAll(".tab")
.forEach(t => t.style.display="none");

document.getElementById(tab).style.display="block";

}

const ctx =
document.getElementById('weightChart');

if(ctx){

new Chart(ctx,{

type:'line',

data:{

labels:['Week1','Week2','Week3'],

datasets:[{

label:'Weight',

data:[377,372,368]

}]

}

});

}
