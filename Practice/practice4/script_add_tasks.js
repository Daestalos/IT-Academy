//1. Напишите функцию, которая принимает строку и возвращает строку, в которой каждый символ повторяется один раз.

// doubleElement("String") ➞ "SSttrriinngg"

// doubleElement("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleElement("1234!_ ") ➞ "11223344!!__  "


// Все тестовые примеры содержат допустимые строки. Пробелы, специальные символы или цифры также учитываем.

 
function doubleElement(str){
    let newstr = '';
    for (let i = 0; i < str.length; i++){
        newstr += str[i] + str[i]
    }
    return newstr
}

console.log(doubleElement("String"));


//2. Напишите функцию, которая перемещает все заглавные буквы в начало слова.

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

//Сохраняйте исходный относительный порядок букв верхнего и нижнего регистра одинаковым.

function capToFront(str){
    let strLower = [], strUpper = []; 
    str.split('').map( symbol => symbol[0] === symbol[0].toLowerCase() ? strLower.push(symbol) : strUpper.push(symbol))
    return strUpper.concat(strLower).join('')
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));




//3. Напишите функцию для замены всех экземпляров символа s1 на символ s2 и наоборот.


// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"

function doubleSwap(str, symbol1 , symbol2){

    return str.split('').map( text => {
        if (text === symbol2) {
           return symbol1
        }
        if (text === symbol1) {
            return symbol2
        } 
        return text
    }).join('')
}

console.log(doubleSwap("aabbccc", "a", "b"));
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
console.log(doubleSwap("128 895 556 788 999", "8", "9"));





//4. Напишите функцию, которая возвращает массив строк, отсортированных по длине в порядке возрастания.


// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []


//Строки будут иметь уникальную длину, поэтому не беспокойтесь о сравнении двух строк одинаковой длины.
//Вернуть пустой массив, если входной массив пуст

function sortByLength(array){
    return array.sort((a,b) => a.length - b.length);
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength([]));