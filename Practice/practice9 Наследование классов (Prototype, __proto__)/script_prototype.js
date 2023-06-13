/* Разработка приложения “Книги”.
1. Объявить класс под названием “Book”
2. Класс “Book”. У каждой книги(созданного объекта от класса Book) есть “название”, “автор”, “количество экземпляров”, “количество страниц”.
Есть метод который выводит количество страниц книги.
Есть метод который считает количество глав(1 глава равна 10 страницам).

3. Класс “Journal”. У каждого журнала(созданного объекта от класса Journal)есть поля: "название", “год выпуска”, "месяц выпуска," номер выпуска”, “количество страниц”.
Есть метод который выводит данные о количестве страниц.
Есть метод, который выводит такие данные как: "номер выпуска", "год выпуска", "месяц выпуска".
*/


function Book(title, countPages, author, countCopies){
    this.title = title;
    this.author = author;
    this.countCopies = countCopies;
    this.countPages = countPages;
}

// При работе с прототипным стилем, методы описываются с ключевым словом Prototype
Book.prototype.getCountPages = function (){
    return this.countPages;
}

Book.prototype.getCountChapters = function(){
    return  Math.round(this.countPages / 10);
}



function Journal(title, countPages, yearProd, monthProd, numProd){
    Book.call(this, title, countPages);
    this.yearProd = yearProd;
    this.monthProd = monthProd;
    this.numProd = numProd;
}


// Для наследования методов (у прототипа) для Класса Journal определяем начальный прототип и в качестве параметра указываем от кого наследуем прототип
// Таким образом прототипом класса Journal устанавливаем связь с прототипом Book
Journal.prototype = Object.create(Book.prototype);

// Запись не обязательна (избавляет от некоторых нюансов)
Journal.prototype.constructor = Journal;

Journal.prototype.getData = function(){
    return this.yearProd + ' , ' + this.monthProd + ' , ' + this.numProd;
}

let journal1 = new Journal('Name1', 111, 2020, 'mai', 12);
let journal2 = new Journal('Name3', 43, 2023, 'june', 15);
console.log(journal1.getCountPages());
console.log(journal2.getData());
