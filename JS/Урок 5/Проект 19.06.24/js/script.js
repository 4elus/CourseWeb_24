var button = document.getElementById("hamburger");
var a = document.getElementById("menu_desktop");



button.addEventListener("click", function(){
    if ( a.style.display == "none"){
        a.style.display = "block";
    }else{
        a.style.display = "none";
    }   
});