let strengthWork;
let reps;
let weight;
let strengthSummary;
let cardioWork;
let timeWork;
let distance;
let cardioSummary;
function trackerAlert() {
  alert("Don't forget to log your mood and soreness!")
}


function workoutType(choice) {
    if (choice == 1) {
        document.getElementById("cardio").disabled = true;
        document.getElementById("strength").disabled = false;
        cardioWork = window.prompt("Enter name of workout");
        timeWork = window.prompt("Enter time for timer");
        distance = window.prompt("Enter distance");
        cardioSummary = "cardioWork: " + cardioWork + " timeWork :" + timeWork + " distance : " + distance;
        // I don't know why we need to input that. And how we use for that. we can just set up the name and time and the distance for the selectWorkout;
        if (document.getElementById("cardio").disabled == true) {
            alert(cardioSummary);
            window.location.href = "../HTML/timer.html";
        }

    }
    if (choice == 2) {
        document.getElementById("strength").disabled = true;
        document.getElementById("cardio").disabled = false;
        strengthWork = window.prompt("Enter name of workout");
        reps = window.prompt("Enter time for timer");
        weight = window.prompt("Enter distance");
        strengthSummary = "strengthWork: " + strengthWork + " reps :" + reps + " weight : " + weight;
        if (document.getElementById("strength").disabled == true)
        {
            alert(strengthSummary);
            window.location.href = "../HTML/timer.html";
        }
    }
}

function weeklySummary()
{
    cardioSummary = "cardioWork: " + cardioWork + " timeWork :" + timeWork + " distance : " + distance + "\n";
    strengthSummary = "strengthWork: " + strengthWork + " reps :" + reps + " weight : " + weight + "\n";
    var textarea = document.getElementById("weeklySummary");
    textarea.innerHTML = "Cardio summary: " + cardioSummary + "Strength summary: " + strengthSummary;
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}