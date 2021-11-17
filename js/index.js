/**
File Name: index.js
Authors: Regan Janssen, Andrew Loaiza, Chen Lu, Jui Nagarkar, Natasha Shirley
Description: JavaScript program that contains the functionality for the fitX application
Date: Nov. 18, 2021
*///
 /**************************************************************************************************/
 /** The following block of code pertains to the
  *  function for saving the lists on the index page and reloading them. 
  */

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

   
    
    //tuesday save list 
    var temp = document.getElementById("tue1").value;
    localStorage.setItem("tue1", temp);
    temp = document.getElementById("tue2").value;
    localStorage.setItem("tue2", temp);
    temp = document.getElementById("tue3").value;
    localStorage.setItem("tue3", temp);
    temp = document.getElementById("tue4").value;
    localStorage.setItem("tue4", temp);
    temp = document.getElementById("tue5").value;
    localStorage.setItem("tue5", temp);
    temp = document.getElementById("tue6").value;
    localStorage.setItem("tue6", temp);
    temp = document.getElementById("tue7").value;
    localStorage.setItem("tue7", temp);
    temp = document.getElementById("tue8").value;
    localStorage.setItem("tue8", temp);
    temp = document.getElementById("tue9").value;
    localStorage.setItem("tue9", temp);
    temp = document.getElementById("tue10").value;
    localStorage.setItem("tue10", temp);
    temp = document.getElementById("tue11").value;
    localStorage.setItem("tue11", temp);
    temp = document.getElementById("tue12").value;
    localStorage.setItem("tue12", temp);
    temp = document.getElementById("tue13").value;
    localStorage.setItem("tue13", temp);

    //wednesday save list 
    var temp = document.getElementById("wed1").value;
    localStorage.setItem("wed1", temp);
    temp = document.getElementById("wed2").value;
    localStorage.setItem("wed2", temp);
    temp = document.getElementById("wed3").value;
    localStorage.setItem("wed3", temp);
    temp = document.getElementById("wed4").value;
    localStorage.setItem("wed4", temp);
    temp = document.getElementById("wed5").value;
    localStorage.setItem("wed5", temp);
    temp = document.getElementById("wed6").value;
    localStorage.setItem("wed6", temp);
    temp = document.getElementById("wed7").value;
    localStorage.setItem("wed7", temp);
    temp = document.getElementById("wed8").value;
    localStorage.setItem("wed8", temp);
    temp = document.getElementById("wed9").value;
    localStorage.setItem("wed9", temp);
    temp = document.getElementById("wed10").value;
    localStorage.setItem("wed10", temp);
    temp = document.getElementById("wed11").value;
    localStorage.setItem("wed11", temp);
    temp = document.getElementById("wed12").value;
    localStorage.setItem("wed12", temp);
    temp = document.getElementById("wed13").value;
    localStorage.setItem("wed13", temp);

    //thursday save list 
    var temp = document.getElementById("thur1").value;
    localStorage.setItem("thur1", temp);
    temp = document.getElementById("thur2").value;
    localStorage.setItem("thur2", temp);
    temp = document.getElementById("thur3").value;
    localStorage.setItem("thur3", temp);
    temp = document.getElementById("thur4").value;
    localStorage.setItem("thur4", temp);
    temp = document.getElementById("thur5").value;
    localStorage.setItem("thur5", temp);
    temp = document.getElementById("thur6").value;
    localStorage.setItem("thur6", temp);
    temp = document.getElementById("thur7").value;
    localStorage.setItem("thur7", temp);
    temp = document.getElementById("thur8").value;
    localStorage.setItem("thur8", temp);
    temp = document.getElementById("thur9").value;
    localStorage.setItem("thur9", temp);
    temp = document.getElementById("thur10").value;
    localStorage.setItem("thur10", temp);
    temp = document.getElementById("thur11").value;
    localStorage.setItem("thur11", temp);
    temp = document.getElementById("thur12").value;
    localStorage.setItem("thur12", temp);
    temp = document.getElementById("thur13").value;
    localStorage.setItem("thur13", temp);

    //friday save list 
    var temp = document.getElementById("fri1").value;
    localStorage.setItem("fri1", temp);
    temp = document.getElementById("fri2").value;
    localStorage.setItem("fri2", temp);
    temp = document.getElementById("fri3").value;
    localStorage.setItem("fri3", temp);
    temp = document.getElementById("fri4").value;
    localStorage.setItem("fri4", temp);
    temp = document.getElementById("fri5").value;
    localStorage.setItem("fri5", temp);
    temp = document.getElementById("fri6").value;
    localStorage.setItem("fri6", temp);
    temp = document.getElementById("fri7").value;
    localStorage.setItem("fri7", temp);
    temp = document.getElementById("fri8").value;
    localStorage.setItem("fri8", temp);
    temp = document.getElementById("fri9").value;
    localStorage.setItem("fri9", temp);
    temp = document.getElementById("fri10").value;
    localStorage.setItem("fri10", temp);
    temp = document.getElementById("fri11").value;
    localStorage.setItem("fri11", temp);
    temp = document.getElementById("fri12").value;
    localStorage.setItem("fri12", temp);
    temp = document.getElementById("fri13").value;
    localStorage.setItem("fri13", temp);
}



 /**************************************************************************************************/
 /** The following block of code pertains to the
  *  function for saving the lists on the index page and reloading them. 
  */
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

    ///Tuesday load list
    var temp = localStorage.getItem('tue1');
    document.getElementById("tue1").innerHTML = temp;
    temp = localStorage.getItem('tue2');
    document.getElementById("tue2").innerHTML = temp;
    temp = localStorage.getItem('tue3');
    document.getElementById("tue3").innerHTML = temp;
    temp = localStorage.getItem('tue4');
    document.getElementById("tue4").innerHTML = temp;  
    temp = localStorage.getItem('tue5'); 
    document.getElementById("tue5").innerHTML = temp;
    temp = localStorage.getItem('tue6');
    document.getElementById("tue6").innerHTML = temp;
    temp = localStorage.getItem('tue7');
    document.getElementById("tue7").innerHTML = temp;
    temp = localStorage.getItem('tue8');
    document.getElementById("tue8").innerHTML = temp;
    temp = localStorage.getItem('tue9');
    document.getElementById("tue9").innerHTML = temp;
    temp = localStorage.getItem('tue10');
    document.getElementById("tue10").innerHTML = temp;
    temp = localStorage.getItem('tue11');
    document.getElementById("tue11").innerHTML = temp;
    temp = localStorage.getItem('tue12');
    document.getElementById("tue12").innerHTML = temp;  
    temp = localStorage.getItem('tue13');
    document.getElementById("tue13").innerHTML = temp;


    ///wednesday load list
    var temp = localStorage.getItem('wed1');
    document.getElementById("wed1").innerHTML = temp;
    temp = localStorage.getItem('wed2');
    document.getElementById("wed2").innerHTML = temp;
    temp = localStorage.getItem('wed3');
    document.getElementById("wed3").innerHTML = temp;
    temp = localStorage.getItem('wed4');
    document.getElementById("wed4").innerHTML = temp;  
    temp = localStorage.getItem('wed5'); 
    document.getElementById("wed5").innerHTML = temp;
    temp = localStorage.getItem('wed6');
    document.getElementById("wed6").innerHTML = temp;
    temp = localStorage.getItem('wed7');
    document.getElementById("wed7").innerHTML = temp;
    temp = localStorage.getItem('wed8');
    document.getElementById("wed8").innerHTML = temp;
    temp = localStorage.getItem('wed9');
    document.getElementById("wed9").innerHTML = temp;
    temp = localStorage.getItem('wed10');
    document.getElementById("wed10").innerHTML = temp;
    temp = localStorage.getItem('wed11');
    document.getElementById("wed11").innerHTML = temp;
    temp = localStorage.getItem('wed12');
    document.getElementById("wed12").innerHTML = temp;  
    temp = localStorage.getItem('wed13');
    document.getElementById("wed13").innerHTML = temp;

     ///thursday load list
     var temp = localStorage.getItem('thur1');
     document.getElementById("thur1").innerHTML = temp;
     temp = localStorage.getItem('thur2');
     document.getElementById("thur2").innerHTML = temp;
     temp = localStorage.getItem('thur3');
     document.getElementById("thur3").innerHTML = temp;
     temp = localStorage.getItem('thur4');
     document.getElementById("thur4").innerHTML = temp;  
     temp = localStorage.getItem('thur5'); 
     document.getElementById("thur5").innerHTML = temp;
     temp = localStorage.getItem('thur6');
     document.getElementById("thur6").innerHTML = temp;
     temp = localStorage.getItem('thur7');
     document.getElementById("thur7").innerHTML = temp;
     temp = localStorage.getItem('thur8');
     document.getElementById("thur8").innerHTML = temp;
     temp = localStorage.getItem('thur9');
     document.getElementById("thur9").innerHTML = temp;
     temp = localStorage.getItem('thur10');
     document.getElementById("thur10").innerHTML = temp;
     temp = localStorage.getItem('thur11');
     document.getElementById("thur11").innerHTML = temp;
     temp = localStorage.getItem('thur12');
     document.getElementById("thur12").innerHTML = temp;  
     temp = localStorage.getItem('thur13');
     document.getElementById("thur13").innerHTML = temp;

    ///friday load list
    var temp = localStorage.getItem('fri1');
    document.getElementById("fri1").innerHTML = temp;
    temp = localStorage.getItem('fri2');
    document.getElementById("fri2").innerHTML = temp;
    temp = localStorage.getItem('fri3');
    document.getElementById("fri3").innerHTML = temp;
    temp = localStorage.getItem('fri4');
    document.getElementById("fri4").innerHTML = temp;  
    temp = localStorage.getItem('fri5'); 
    document.getElementById("fri5").innerHTML = temp;
    temp = localStorage.getItem('fri6');
    document.getElementById("fri6").innerHTML = temp;
    temp = localStorage.getItem('fri7');
    document.getElementById("fri7").innerHTML = temp;
    temp = localStorage.getItem('fri8');
    document.getElementById("fri8").innerHTML = temp;
    temp = localStorage.getItem('fri9');
    document.getElementById("fri9").innerHTML = temp;
    temp = localStorage.getItem('fri10');
    document.getElementById("fri10").innerHTML = temp;
    temp = localStorage.getItem('fri11');
    document.getElementById("fri11").innerHTML = temp;
    temp = localStorage.getItem('fri12');
    document.getElementById("fri12").innerHTML = temp;  
    temp = localStorage.getItem('fri13');
    document.getElementById("fri13").innerHTML = temp;

}
