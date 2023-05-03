// N.10 Домашнее задание LOGIC_TASKS
// 1.  Напишите функцию сортировки, которая сортирует числа не по порядку номеров, а по их длине! Это означает сортировку чисел с наименьшим количеством цифр в первую очередь до чисел с наибольшим количеством цифр.
 
// numbSort([2, 37, 1, 2, 739, 2]) ➞ [1, 2, 2, 2, 37, 739]
// numbSort([777, 182, 11, 881, 27]) ➞ [11, 27, 777, 182, 881]
// numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]) ➞ [5, 4, 3, 2, 1, 6, 1, 3, 18]

function numbSort(arr){
    return arr.sort( (a,b) => `${a}`.length - `${b}`.length)
}

console.log(numbSort([2, 37, 1, 2, 739, 2]));
console.log(numbSort([777, 182, 11, 881, 27]));
console.log(numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]));

// 2. Напишите функцию, которая сортирует слова по заданной строке.
// В строке могут быть лишние буквы (см. Примеры #2 и #3).
// В каждом массиве будут уникальные начальные буквы.

// sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop")➞ [" coconut", " mandarin", " orange", " pear"]
// sortStr(["middle", "junior", "senior"], "stnmj")➞ ["senior", " middle", " junior"]
// sortStr(["bike", "car", "motorcycle"], "camrb")➞ ["car", "motorcycle", "bike"]

function sortStr(arr, str){
    let newArray = [];
    str.split('').map(letter => arr.map(item => {
        if (item.trim()[0] === letter){
            newArray.push(item)
        } 
    }))
    return newArray
}

console.log(sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop"));
console.log(sortStr(["middle", "junior", "senior"], "stnmj"));
console.log(sortStr(["bike", "car", "motorcycle"], "camrb"));

// 3. Есть строка, переверните все слова нечетной длины. Слова четной длины не изменяются.
// // revOddWord("Egg") ➞ "ggE"
// revOddWord ("It is false") ➞ "It is eslaf"
// revOddWord ("Dear Santa, give me a new iPhone”)➞ "Dear atnaS, give me a wen iPhone. " 

function revOddWord(str){
    return str.split(' ').map(item => item.replace(/\w+/gi, word => word.length % 2 !== 0 ? word.split('').reverse().join('') : word)).join(" ")
}

console.log(revOddWord("Egg"));
console.log(revOddWord ("It is false"));
console.log(revOddWord ("Dear Santa, give me a new iPhone"));
