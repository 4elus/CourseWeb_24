var button = document.getElementById("hamburger");
var a = document.getElementById("menu_desktop");

var array = ["Alex", "Sam", "Bob"];
var switch_btn = document.getElementById("switch_theme");
var color = 1;
var head = document.getElementById("head");

switch_btn.addEventListener("click", function(){

    if (color == 1){
        head.style.backgroundColor = "#3a342b";
        switch_btn.src = "css/img/dark.png";
        color = 0;
    }
    else{
        color = 1;
        switch_btn.src = "css/img/light.png";
        head.style.backgroundColor = "#ffe2b0";
    }
});

button.addEventListener("click", function(){
    for (let i = 0; i < a.length; i++) {
        if (a[i].style.display == "none"){
            a[i].style.display = "block";
        }else{
            a[i].style.display = "none";
        }
    }
});

var button = document.getElementById("hamburger");
var menuMobile = document.getElementById("menu_mobile");

button.addEventListener("click", function(){
    if (menuMobile.style.display === "none") {
        menuMobile.style.display = "block";
    } else {
        menuMobile.style.display = "none";
    }
});

function closeMobileMenu() {
    menuMobile.style.display = "none";
}

function handleResize() {
    if (window.innerWidth >= 1200) {
        closeMobileMenu();
    }
}

window.addEventListener('resize', handleResize);
handleResize();