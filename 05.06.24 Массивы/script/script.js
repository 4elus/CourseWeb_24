var div_res = document.getElementById("res");
var input_username = document.getElementById("username");
var input_password = document.getElementById("password");

function check_username_and_password() {
    var username = form.username.value;
    var password = form.password.value;
    var symbols_in_username = username.length;
    var symbols_in_password = password.length;
    var s = "";
   
    if (symbols_in_username < 3) {
        s += "<br>Имя должно больше 3х символов";
    }

    if (username == "") {
        s += "<br>Имя не должно быть пустым";
    }

    if (password == "") {
        s += "<br>Пароль не должен быть пустым";
    }

    if (symbols_in_password <= 6) {
        s += "<br>Пароль должен быть больше шести символов";
    }

    if (!hasUppercase(password)) {
        s += "<br>Пароль должен содержать хотя бы одну заглавную букву";
    }

    if (s == ""){
        input_username.style.color = "green";
        window.open("newpage.html");
    }else{
        input_username.style.color = "red";
    }

    div_res.innerHTML = s;
}

function hasUppercase(password) {
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (ch == ch.toUpperCase() && ch != ch.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function defaultColor(){
    input_username.style.color = "black";
    input_password.style.color = "black";
}