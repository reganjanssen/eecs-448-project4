function trackerAlert(){
  alert("Don't forget to log your mood and soreness!")
}

function workoutType(choice){
  if(choice == 1){
    document.getElementById("cardio").disabled = 'disabled'
  }
  if(choice == 2){
    document.getElementById("strength").disabled = 'disabled'
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}