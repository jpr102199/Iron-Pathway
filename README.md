# Iron-Pathway
<header>
<h1>🛡 Iron Pathway</h1>
<p id="date"></p>
</header>

<div class="card">
<h2>🔥 Workout Streak</h2>
<p id="streak">0 Days</p>
</div>

<div class="card">
<h2>Today's Workout</h2>

<ul>
<li>Lat Pulldown – 3x10</li>
<li>Seated Row – 3x10</li>
<li>Back Extensions – 3x12</li>
<li>Face Pulls – 3x12</li>
<li>10 min Stairmaster</li>
</ul>

<button onclick="startWorkout()">Start Workout</button>

</div>

<div class="card">
<h2>Daily Stats</h2>

<p>Calories</p>
<input id="calories" placeholder="Enter calories">

<p>Protein</p>
<input id="protein" placeholder="Enter grams">

<br><br>

<button onclick="saveStats()">Save Stats</button>

</div>
<body>

<header class="header">
<h1>Iron Pathway</h1>
<p id="date"></p>
</header>

<div class="dashboard">

<div class="card">
<h2>🔥 Streak</h2>
<p id="streak">0 days</p>
</div>

<div class="card">
<h2>⚖ Weight</h2>
<input id="weight" placeholder="Enter weight">
<button onclick="saveWeight()">Save</button>
</div>

<div class="card">
<h2>🏋 Today's Workout</h2>

<ul>
<li>Lat Pulldown</li>
<li>Seated Row</li>
<li>Back Extensions</li>
<li>Face Pulls</li>
</ul>

<button onclick="startWorkout()">Start Workout</button>

</div>

</div>

<nav class="bottom-nav">

<button>Workout</button>
<button>Nutrition</button>
<button>Dashboard</button>
<button>Progress</button>

</nav>

</body>

