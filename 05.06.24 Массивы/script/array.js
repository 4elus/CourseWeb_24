var name = "Alex";
var name2 = "Oleg"

var names = ["Агапов", "Пивоварова", "Черенкова", "Булдина"];
console.log(name2);
console.log(names);

for (let index = 0; index < names.length; index++) {
    if (names[index].endsWith('а')){
        console.log("Поздравляю вас с праздником, " + names[index]);
    }
}