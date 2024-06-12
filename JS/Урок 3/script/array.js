var array = [1, 2, 3];
console.log(array[1]);

var matrix = [[1,2,3], [4, 5, 6], [7, 8, 9]]
console.log(matrix[2][1]);

// Вывод по гор.
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//        console.log(matrix[i][j]);
        
//     }
    
// }
// Вывод матрицы по верт.
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//        console.log(matrix[j][i]);
        
//     }  
// 

// Работа вложенных циклов
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j <=10; j++) {
//         console.log(i + "*" + j + " = " + (i*j));
        
//     } 
// }


// Массив ключ значение
// var Oleg = ["Alex", "Sam", "Clover"];
// var Sveta = ["Olga", "Lena", "Clover"];

// var hash = {
//     1: ["Alex", "Sam", "Clover"],
//     "Sveta": ["Olga", "Lena", "Clover"]

// };

// console.log(hash[1]);
// console.log(hash["Sveta"]);

// for (let key in hash) {
//   for (let i = 0; i < hash[key].length; i++) {
//     console.log(hash[key][i]);
    
//   }
// }

var matrix = [
    [1, 2, 3, 10], 
    [4, 5, 6, 11], 
    [7, 8, 9, 12, 13]
];

console.log(matrix[0].length);
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       console.log(matrix[i][j]);
    }      
}  
