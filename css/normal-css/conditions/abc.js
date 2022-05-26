msg="hi"
function showHide(el){
    var msg;
    var div=document.getElementById('newpost');
    if(div.style.display!=="none"){
        div.style.display="none"
        el.value = "Close";
        el.innerHTML = "Close";
    }else{
        div.style.display="block"
        msg="Hide"
        el.value = "Open";
        el.innerHTML = "Open";
    }
}