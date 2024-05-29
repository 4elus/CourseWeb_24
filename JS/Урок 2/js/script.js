var div_res = document.getElementById("res");

function check_username() {
    var username = form.username.value;
    var tel = form.tel.value
    var symbols_in_username = username.length;

    div_res.innerHTML = "";

    if (username == ""){
        div_res.innerHTML = "Поле name не может быть пустым!";
    }

   if(symbols_in_username <= 2){
        div_res.innerHTML += "<br>Имя должно быть больше двух символов";
   }

   is_number_in_string(username);
}

function is_number_in_string(name) {
    for (let i = 0; i <= 9; i++) {
        if (name.includes(i)){
            alert("В этой строке есть цифра " + i);
        }
    }
}