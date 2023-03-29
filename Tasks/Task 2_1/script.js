// N.2 Домашнее задание FUNCTIONS_AND_ARRAYS
// 1. Напишите функцию, которая принимает массив целых чисел и строк. Преобразуйте целые числа в строки и верните новый массив.
// convertElements([1, 2, "x", "z"]) ➞ ["1", "2", "x", "z"]
// convertElements(["pdf", 123, "def", 456]) ➞ ["pdf", "123", "def", "456"]
// convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// convertElements([]) ➞ []

function convertElements(array){
    return array.map(item => {
        if (typeof(item) === 'number'){
            return `${item}`
        } else return item
    })
}

console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));


 
// 2. Создайте функцию, которая возвращает количество " true” значений в массиве.
// numericTrue([true, false, false, true, false]) ➞ 2
//  numericTrue ([false, false, false, false]) ➞ 0
//  numericTrue ([]) ➞ 0
//Вернуть 0, если дан пустой массив.
//Все элементы массива имеют тип bool (true или false).
 
function numericTrue(array){
    let counter = 0;
    array.map( (item) =>{
        if (item) counter++
    })
    return counter;
}

console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue ([false, false, false, false]));
console.log(numericTrue ([]));




// 3. Вернуть наибольшее и наименьшее числа
// Создайте функцию, которая принимает массив чисел, и возвращает наибольшее и наименьшее число.
// highLow([1, 2, 3, 4, 5]) ➞ 5, 1
// highLow([1, 2, -3, 4, 5]) ➞ 5. -3
// highLow([1, 9, 3, 4, –5]) ➞ 9, -5
// highLow([13]) ➞ 13, 13 

function highLow(array){
    return `${Math.max(...array)}, ${Math.min(...array)}`
}

console.log(highLow([1, 2, 3, 4, 5]));
console.log(highLow([1, 2, -3, 4, 5]));
console.log(highLow([1, 9, 3, 4, -5]));
console.log(highLow([13]));