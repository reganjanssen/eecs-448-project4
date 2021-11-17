/**
File Name: timer.js
Authors: Regan Janssen, Andrew Loaiza, Chen Lu, Jui Nagarkar, Natasha Shirley
Description: JavaScript program that contains the functionality for the fitX application
Date: Nov. 18, 2021
*/

 /**************************************************************************************************/
 /** The following block of code pertains to converting time to a format of hours, minutes, seconds, and milliseconds
  * Adapted from author Omar Benseddik
  */

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  let startTime; 
  let elapsedTime = 0;
  let timerInterval;
  let timeCal = 0
  
  // Function to print the timer on the innerHTML
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Functions for "start", "pause" and "reset"
  function start() {
    startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function printTime()
      {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
      }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
   }
// set up the time for workout;
function end() {
    timeCal = timeToString(elapsedTime);
    print("99:99:99");
    elapsedTime = 0;
    //set up a back to the main page. And use timeCal to get the work out time;
    alert("Great! You has been workout : " + timeCal);
    window.location.href = "../index.html";
}

  
  // Function for button display
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  
  // Event Listeners display proper time
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  let endButton = document.getElementById("endButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);
  // endButton.addEventListener("click", end);

//get the workout time.
function timeLog()
  {
      //where we have to set up to? 
     //document.getElementById("???").innerHTML = "Workout Time : "timeCal;
  }
