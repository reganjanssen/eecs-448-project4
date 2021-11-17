//function for saving the lists on the index page and reloading them. 
function save() {
   
    //monday save list 
    var temp = document.getElementById("mon1").value;
    localStorage.setItem("mon1", temp);
    temp = document.getElementById("mon2").value;
    localStorage.setItem("mon2", temp);
    temp = document.getElementById("mon3").value;
    localStorage.setItem("mon3", temp);
    temp = document.getElementById("mon4").value;
    localStorage.setItem("mon4", temp);
    temp = document.getElementById("mon5").value;
    localStorage.setItem("mon5", temp);
    temp = document.getElementById("mon6").value;
    localStorage.setItem("mon6", temp);
    temp = document.getElementById("mon7").value;
    localStorage.setItem("mon7", temp);
    temp = document.getElementById("mon8").value;
    localStorage.setItem("mon8", temp);
    temp = document.getElementById("mon9").value;
    localStorage.setItem("mon9", temp);
    temp = document.getElementById("mon10").value;
    localStorage.setItem("mon10", temp);
    temp = document.getElementById("mon11").value;
    localStorage.setItem("mon11", temp);
    temp = document.getElementById("mon12").value;
    localStorage.setItem("mon12", temp);
    temp = document.getElementById("mon13").value;
    localStorage.setItem("mon13", temp);

}


function reloadPage()
{
    ///monday load list
    var temp = localStorage.getItem('mon1');
    document.getElementById("mon1").innerHTML = temp;
    temp = localStorage.getItem('mon2');
    document.getElementById("mon2").innerHTML = temp;
    temp = localStorage.getItem('mon3');
    document.getElementById("mon3").innerHTML = temp;
    temp = localStorage.getItem('mon4');
    document.getElementById("mon4").innerHTML = temp;  
    temp = localStorage.getItem('mon5'); 
    document.getElementById("mon5").innerHTML = temp;
    temp = localStorage.getItem('mon6');
    document.getElementById("mon6").innerHTML = temp;
    temp = localStorage.getItem('mon7');
    document.getElementById("mon7").innerHTML = temp;
    temp = localStorage.getItem('mon8');
    document.getElementById("mon8").innerHTML = temp;
    temp = localStorage.getItem('mon9');
    document.getElementById("mon9").innerHTML = temp;
    temp = localStorage.getItem('mon10');
    document.getElementById("mon10").innerHTML = temp;
    temp = localStorage.getItem('mon11');
    document.getElementById("mon11").innerHTML = temp;
    temp = localStorage.getItem('mon12');
    document.getElementById("mon12").innerHTML = temp;  
    temp = localStorage.getItem('mon13');
    document.getElementById("mon13").innerHTML = temp;

}

