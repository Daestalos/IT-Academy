// 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
// Регулярные выражения (кто умеет) не использовать.
// Спросить у пользователя строку. Вывести в консоль количество русских гласных букв в ней.
// ●	с использованием метода массива forEach,
// ●	с использованием метода массива filter,
// ●	с использованием метода массива reduce.

function getWordForEach(){
    const rusLetter = ["а", "о", "и", "ы", "у", "э"]
    let word = prompt('Задайте слово на проверку'), count = 0
    word.split('').forEach(item => {
        if( rusLetter.indexOf(item.toLowerCase())) count++
    }) 
    return `forEach ${count}`
}

console.log(getWordForEach());

// 2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача - создать объект, отображающий каждого человека по его роду занятий.
// var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
// var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// combineNameWork (names, jobs) ➞ {
// Max: "Butcher",
// Vera: "Programmer",
// Joe: "Doctor",
// Annette: "Teacher",
// Sussan: "Lecturer"
// }

//Два массива имеют одинаковую длину.
//Индекс имени в массиве имен совпадает с индексом работы человека в массиве вакансий, как показано в таблице выше.

var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

function combineNameWork(names, jobs){
    let obj = {};
    names.map((name, i) => obj[name] = jobs[i])
    return obj
}

console.log(combineNameWork(names, jobs));

// 3.	У вас есть входной массив (из строк с двумя буквами) и массив слов
// Напишите функцию, которая возвращает true, если каждую (строку с двумя буквами) из первого массива можно найти хотя бы один раз в массиве слов(втором массиве).
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" не найден ни в одном из слов.
// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

function canFind(arr, findArr) {
    return arr.every(item => findArr.some(word =>word.search(RegExp(item), 'g') != -1 ? true : false))
}

console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));