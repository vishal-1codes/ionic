

function myFunction(){
    var timeslotvalues=["10 to 11","11 to 12","12 to13","13 to 14"]
    var arrayLength = timeslotvalues.length;
    for(var i=0; i<arrayLength;i++){
        document.getElementById("timebtn").innerHTML = timeslotvalues[i];    
    }

}