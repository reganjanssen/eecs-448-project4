
function trackerAlert() {
  alert("Don't forget to log your mood and soreness!")
}


function workoutType(choice) {
    if (choice == 1) {
        document.getElementById("cardio").disabled = true;
        document.getElementById("strength").disabled = false;
        let cardioWork = window.prompt("Enter name of workout");
        let timeWork = window.prompt("Enter time for timer");
        let distance = window.prompt("Enter distance");
        // I don't know why we need to input that. And how we use for that.
        if (document.getElementById("cardio").disabled == true) {
            alert("cardioWork: " + cardioWork + " timeWork :" + timeWork + " distance : " + distance);
            window.location.href = "../HTML/timer.html";
        }

    }
    if (choice == 2) {
        document.getElementById("strength").disabled = true;
        document.getElementById("cardio").disabled = false;
        let strengthWork = window.prompt("Enter name of workout");
        let reps = window.prompt("Enter time for timer");
        let weight = window.prompt("Enter distance");
        if (document.getElementById("strength").disabled == true)
        {
            alert("strengthWork: " + strengthWork + " reps :" + reps + " weight : " + weight);
            window.location.href = "../HTML/timer.html";
        }
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}