
// Дополнительные задания

//1. Напишите функцию, которая принимает на параметры "год" и "месяцы", а затем вернет, какой год будет по прошествии n месяцев.

// afterNumMonths(2020, 24) ➞ 2022

// afterNumMonths(1832, 2) ➞ 1832

// afterNumMonths(1444, 60) ➞ 1449

function afterNumMonths(y, m){
    let year = y;
    for (let i = m; i >= 12; i++) {
        year++;
        i -= 12;
    }
    return year;

}


console.log(afterNumMonths(2020, 24));
console.log(afterNumMonths(1832, 2));
console.log(afterNumMonths(1444, 60));



//2. Учитывая параметры день, месяц и год, верните, является ли эта дата допустимой датой.

//isTrueDate(35, 2, 2018) ➞ false
// В феврале не может быть 35 дней

//isTrueDate(8, 3, 2021) ➞ true
// Все нормально, 8 марта никто не отменял :)

//isTrueDate(31, 6, 1985) ➞ false
// В июне 30 дней

function isTrueDate(d, m, y){
    let getDays = new Date(y, m, 0).getDate()
    return getDays > d
}

console.log(isTrueDate(35, 2, 2018));
console.log(isTrueDate(8, 3, 2021));
console.log(isTrueDate(31, 6, 1985));



//3. Напишите функцию, которая берет время time1 и время time2 и возвращает количество часов, прошедших между двумя временами.

// hoursPass("4:00 AM", "10:00 AM") ➞ "6 часов"

// hoursPass("5:00 PM", "7:00 PM") ➞ "2 часа"

// hoursPass("1:00 AM", "4:00 PM") ➞ "15 часов"


function hoursPass(time1, time2){

}

console.log(hoursPass("4:00 AM", "10:00 AM"));