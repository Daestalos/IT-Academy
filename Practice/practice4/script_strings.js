//1. Проверьте, является ли первая буква в каждом слове заглавной. 


// checkTitle("I Am Still Trying To Figure That Out!") ➞ true

// checkTitle("I Work In An Office!") ➞ true

// checkTitle("I do NOT work in an office") ➞ false

function checkTitle(str){
    return str.split(' ').every( item => item.charAt(0) === item.charAt(0).toUpperCase())
}

console.log(checkTitle("I Am Still Trying To Figure That Out!"));
console.log(checkTitle("I Work In An Office!"));
console.log(checkTitle("I do NOT work in an office"));




// 2. Создайте функцию, которая находит слово "велосипед" в заданной строке (без учета регистра). Если найдено, верните "Велосипед найден", иначе верните "Велосипеда нет".


// bikeSearch("Также популярен среди туристов и в спортивных целях.") ➞ "Велосипеда нет"

// bikeSearch("Велосипед как «транспортное средство") ➞ "Велосипед найден"

// bikeSearch("Первый велосипед в мире, похожий на используемые в наши дни, назывался Rover") ➞ "Велосипед найден"


//"велосипед" может встречаться в разных регистрах (например, в верхнем, нижнем, смешанном).


function bikeSearch(str){
    let array = str.toLowerCase().split(' ');

    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('велосипед')) {
          return `Велосипед найден`
        }
        
    }
    return `Велосипеда нет`
}

console.log(bikeSearch("Также популярен среди туристов и в спортивных целях."));
console.log(bikeSearch("Велосипед как «транспортное средство"));
console.log(bikeSearch("Первый велосипед в мире, похожий на используемые в наши дни, назывался Rover"));


//3. Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.


// countVowels("Braid") ➞ 2

// countVowels("Daughter") ➞ 3

// countVowels("Package") ➞ 3

// a, e, i, o, u считаются гласными (без "y").
// Все тестовые примеры состоят из одного слова и содержат только буквы.

function countVowels(str){
    let counter = 0;
    str.split('').map(item => { if (item === "a" || item === "e" || item === "i" || item === "o" || item === "u") counter++})
    return counter

}

console.log(countVowels("Braid"));
console.log(countVowels("Daughter"));
console.log(countVowels("Package"));