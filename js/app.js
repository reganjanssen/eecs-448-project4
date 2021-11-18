/**
File Name: app.js
Authors: Regan Janssen, Andrew Loaiza, Chen Lu, Jui Nagarkar, Natasha Shirley
Description: JavaScript program that contains the functionality for the fitX application
Date: Nov. 18, 2021
*/

 /**************************************************************************************************/
 /** The following block of code pertains to the date display at the top of the day.html pages
  * Adapted from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  */
function currentDate()
{
  var currentDay = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  currentDay = mm + '/' + dd + '/' + yyyy;
  return (currentDay);
}

 /**************************************************************************************************/
 /** The following block of code pertains to the pop up alert for tracking mood and soreness
  * On load alerts for the day.html files when it is first loaded
  */
function trackerAlert(){
    alert("Don't forget to log your wellness!")
  }
  
  /**************************************************************************************************/
  /**
   * The following block of code pertains to the mood slider
   * Adapted from W3 schools
   */

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  
  /**************************************************************************************************/

  /**
   * The following block of code pertains to the filtering of workouts on the left half of workout div 
   * Adapted from W3 schools
   */
  loadWorkout("all")
  // Function to display the select workout type
  function loadWorkout(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Adds show class to filtered elements, and removes show class from elements not selected
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
  /**************************************************************************************************/
  /**
   * The following block of code pertains to the water tracker
   */
let totalIntake = 0
const curdate = document.querySelector('#curdate') // this can be moved elswhere to display date
const curIntake = document.querySelector('#curIntake')      
curdate.innerHTML = ' ' + new Date().toDateString()
curIntake.innerHTML = ' ' + '0L'
  // Takes in the amount of water specified and adds it to the total intake
function fill(qty) {
    if (qty) {
      totalIntake += qty
    } 
      else {
        totalIntake = 0
      }
// Displays the current intake
curIntake.innerHTML = ' ' + totalIntake + 'L'
}
 
/**************************************************************************************************/
/** 
 * The following block of code pertains to the food tracker.
 * Adapted from https://semihdurmus.github.io/SD_03_Todo_List/
 **/

const foodList = [];

const foodListElement = document.querySelector("#myUL");

// add food to the list by hitting enter or using the add button
document.querySelector("#add_button").addEventListener("click", addFood);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addFood()
  }
});
// inserts added inputs to food object
function addFood() {
  const foodText = document.querySelector("#myInput").value;

  if (foodText == "") {
    alert("No item entered");
  } else {
    const foodObject = {
      id: foodList.length,
      foodText: foodText,
    };
    foodList.unshift(foodObject); // adds new items to top of list
    displayFood();
  }
}
// delete item on food list using the trashcan icon
function deleteItem(x) {
  foodList.splice(
    foodList.findIndex((item) => item.id == x),
    1
  );
  displayFood();
}

// function to display the food items in a list. Takes in the user input, returns a list of items
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
/**************************************************************************************************/
