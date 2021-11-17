//function for saving the lists on the index page and reloading them. 
function save() {
   
    //monday save list 
    var temp = document.getElementById("mon1").value;
    localStorage.setItem("mon1", soreTextSave);
    temp = document.getElementById("mon2").value;
    localStorage.setItem("mon2", soreTextSave);
    temp = document.getElementById("mon3").value;
    localStorage.setItem("mon3", soreTextSave);
    temp = document.getElementById("mon4").value;
    localStorage.setItem("mon4", soreTextSave);
    temp = document.getElementById("mon5").value;
    localStorage.setItem("mon5", soreTextSave);
    temp = document.getElementById("mon6").value;
    localStorage.setItem("mon6", soreTextSave);
    temp = document.getElementById("mon7").value;
    localStorage.setItem("mon7", soreTextSave);
    temp = document.getElementById("mon8").value;
    localStorage.setItem("mon8", soreTextSave);
    temp = document.getElementById("mon9").value;
    localStorage.setItem("mon9", soreTextSave);
    temp = document.getElementById("mon10").value;
    localStorage.setItem("mon10", soreTextSave);
    temp = document.getElementById("mon11").value;
    localStorage.setItem("mon11", soreTextSave);
    temp = document.getElementById("mon12").value;
    localStorage.setItem("mon12", soreTextSave);
    temp = document.getElementById("mon13").value;
    localStorage.setItem("mon13", soreTextSave);

}



function reloadPage()
{
    ///monday load list
    var temp = document.getElementById("monday1").value; 
    document.getElementById("mon1").innerHTML = temp;
    temp = document.getElementById("monday2").value; 
    document.getElementById("mon2").innerHTML = temp;
    temp = document.getElementById("monday3").value; 
    document.getElementById("mon3").innerHTML = temp;
    temp = document.getElementById("monday4").value; 
    document.getElementById("mon4").innerHTML = temp;  
    temp = document.getElementById("monday5").value; 
    document.getElementById("mon5").innerHTML = temp;
    temp = document.getElementById("monday6").value; 
    document.getElementById("mon6").innerHTML = temp;
    temp = document.getElementById("monday7").value; 
    document.getElementById("mon7").innerHTML = temp;
    temp = document.getElementById("monday8").value; 
    document.getElementById("mon8").innerHTML = temp;
    temp = document.getElementById("monday9").value; 
    document.getElementById("mon9").innerHTML = temp;
    temp = document.getElementById("monday10").value; 
    document.getElementById("mon10").innerHTML = temp;
    temp = document.getElementById("monday11").value; 
    document.getElementById("mon11").innerHTML = temp;
    temp = document.getElementById("monday12").value; 
    document.getElementById("mon12").innerHTML = temp;  
    temp = document.getElementById("monday13").value; 
    document.getElementById("mon13").innerHTML = temp;

}
