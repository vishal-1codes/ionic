document.getElementById("otpno").addEventListener("keyup", function() {
    var nameInput = document.getElementById('otpno').value;
    console.log("enter length",nameInput.length);
    if (nameInput.length == 10) {
        document.getElementById('send').removeAttribute("disabled");
    } else {
        document.getElementById('send').setAttribute("disabled", null);
    }
});