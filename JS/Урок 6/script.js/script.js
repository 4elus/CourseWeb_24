var button = document.getElementById("hamburger");
var a = document.getElementById("menu_mobile");
var burger_button = document.getElementById("burger");
a.style.display = "none";

burger_button.addEventListener("click", function(){
    if (a.style.display == "block") 
        a.style.display = "none";
     else 
        a.style.display = "block";
    
});
