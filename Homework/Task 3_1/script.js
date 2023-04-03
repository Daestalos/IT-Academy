// N.3 Домашнее задание ARRAY_OBJECT_FUNCTION
// 1.	Напишите функцию, которая возвращает сумму элементов больше 5 в данном массиве.  
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
// sumFive([1, 2, 3, 4]) ➞ 0
// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
// Используйте для суммы все элементы больше 5, но не элементы которые равны 5 и меньше.

function sumFive(array){
    return array.filter( value => value > 5).reduce((sum, value) => sum + value, 0); 
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));


// 2.	Напишите функцию, преобразующую объект в массив ключей и значений.
// objectToArray({
// D: 1,
// B: 2,
// C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
// likes: 2,
// dislikes: 3,
// followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj){
    let array = [];
    for (let key of Object.keys(obj)){
        array.push([key, obj[key]])
    }
    return array
}

console.log(objectToArray({D: 1,B: 2,C: 3}));
console.log(objectToArray({likes: 2,dislikes: 3,followers: 10}))


// 3.	Массивы могут включать в себя разные типы данных. Ваша задача  - просуммировать все числовые элементы в данном массиве. Создайте функцию, которая принимает массив и возвращает сумму всех чисел в массиве.
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

function numbersSum(array){
    return array.filter(item => typeof(item) === "number").reduce((acc, value) => acc + value, 0)
}

console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([true, false, "123", "75"]));
console.log(numbersSum([1, 2, 3, 4, 5, true]));

// 4. Создайте функцию, которая принимает объект и возвращает ключи и значения в виде отдельных массивов. Возвращает ключи, отсортированные в алфавитном порядке, и их соответствующие значения в том же порядке.
// keysAndValues({ a: 1, b: 2, c: 3 })➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })➞ [["key1", "key2", "key3"], [true, false, undefined]]


function keysAndValues(obj){
    let arrayKey = [], arrayValue = [];


    for(let key of Object.keys(obj).sort()){
        arrayKey.push(key);
        arrayValue.push(obj[key]);
    }
    
    return [arrayKey.sort(), arrayValue]

}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key2: false, key1: true,  key3: undefined }));


