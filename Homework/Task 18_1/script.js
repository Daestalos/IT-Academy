// 1.	Напишите функцию, которая берет код квадрата шахматной доски и возвращает его цвет.

function chessBoard(pos){
    const str = ['a', 'b', 'c ', 'd', 'e', 'f', 'g', 'h'];
    let [letter, number] = [...pos];
    return str.indexOf(letter) + 1 === +number ? 'черный' : 'белый'

}

console.log(chessBoard("a1"));  // "черный"
console.log(chessBoard("e5") ); // "черный"
console.log(chessBoard("d1"));  // "белый"


// 2.	Учитывая целочисленный массив, преобразуйте этот массив в зеркальный.

function mirror(array){
    return [...array, ...array.slice(0,-1).reverse()]
}

console.log(mirror([0, 2, 4, 6])); // [0, 2, 4, 6, 4, 2, 0]
console.log(mirror([1, 2, 3, 4, 5])); // ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mirror([3, 5, 6, 7, 8])); // ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
 
 
// 3.	Число называется дисариумом, если сумма его цифр, возведенных в соответствующие положения, равна самому числу. Создайте функцию, которая определяет, является ли число дисариумом или нет.

function isDisarium(num){
    let sum = `${num}`.split('').reduce((acc, cur, i) =>  acc + Math.pow(cur, i+1) ,0)
    return sum === num ? true : false
}

console.log(isDisarium(75)); //  ➞ false
// 7^1 + 5^2 = 7 + 25 = 32
console.log(isDisarium(135)); //  ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
console.log(isDisarium(8)); //  ➞ true
console.log(isDisarium(466)); // ➞ false





