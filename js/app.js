let strengthWork;
let reps;
let weight;
let strengthSummary;
let cardioWork;
let timeWork;
let distance;
let cardioSummary;

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
// On load alerts the user to remember to track items
function trackerAlert(){
    alert("Don't forget to log your mood and soreness!")
  }
  
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  
  // Function to display the select workout type
  loadWorkout("all")
  function loadWorkout(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }
  // Shows filtered elements
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  // Hides elements that are not selected
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1); 
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Adds active class to the current control button
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  //For the water tracker
let totalIntake = 0
const curdate = document.querySelector('#curdate') // this can be moved elswhere to display date
const curIntake = document.querySelector('#curIntake')
        
curdate.innerHTML = '&nbsp;' + new Date().toDateString()
curIntake.innerHTML = '&nbsp;' + '0L'
  function fill(qty) {
    if (qty) {
      totalIntake += qty
    } 
      else {
        totalIntake = 0
      }

curIntake.innerHTML = '&nbsp;' + totalIntake + 'L'
}

// Nutrition tracker
const foodList = [];

const foodListElement = document.querySelector("#myUL");

document.querySelector("#add_button").addEventListener("click", addFood);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addFood()
  }
});
// inserts added inputs to array of objects
function addFood() {
  const foodText = document.querySelector("#myInput").value;

  if (foodText == "") {
    alert("No item entered");
  } else {
    const foodObject = {
      id: foodList.length,
      foodText: foodText,
      // isDone: false,  // this is for a check off type list
    };
    foodList.unshift(foodObject); // adds new items to top of list
    displayFood();
  }
}

// delete item on food list
function deleteItem(x) {
  foodList.splice(
    foodList.findIndex((item) => item.id == x),
    1
  );
  displayFood();
}

// Displays the items to the screen
function displayFood() {
  foodListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  foodList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.foodText;
    listElement.setAttribute("data-id", item.id);

    delBtn.setAttribute("data-id", item.id);
    delBtn.classList.add("far");
    delBtn.classList.add("fa-trash-alt");
    delBtn.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneFood(selectedId);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);
    });

    foodListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}