msg="hi"
function showHide(){
    var msg;
    var div=document.getElementById('newpost');
    if(div.style.display!=="none"){
        div.style.display="none"
        msg="Show"
    }else{
        div.style.display="block"
        msg="Hide"
    }
}