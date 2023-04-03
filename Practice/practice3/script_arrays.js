//1. Создайте функцию, которая принимает массив чисел или букв и возвращает строку.

/*arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/


function arrayToString(array) {
    let str = '';
    array.map( item => str += item)
    return str
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));
 
//2. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.

/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */

//Обратите внимание, что num также включено в возвращаемый массив.


function arrayOfMultiples(num, lenght){

    let number = 0, array = [];
    for (let i = 0; i < lenght; i++){
        number += num;
        array.push(number)
    }
    return array
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

 




 


