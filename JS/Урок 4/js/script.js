var button = document.getElementById("hamburger");
var a = document.getElementsByClassName("test");


for (let i = 0; i < a.length; i++) {
    a[i].style.display = "block";         
}



button.addEventListener("click", function(){
    for (let i = 0; i < a.length; i++) {
        if (a[i].style.display == "block"){
            a[i].style.display = "none";
        }else{
            a[i].style.display = "block";
        }
    }
});
