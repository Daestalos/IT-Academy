/**
  1.  Вы заблудились в новом месте. Учитывая класс с именем СurrentСoordinates с методом с getFullIndo, верните координаты своего местоположения.
 */


//var place1 = new СurrentСoordinates(1,2);
//place1.getFullIndo() ➞ "x = 1", "y = 2"


//var place2 = new СurrentСoordinates(76,29);
//place1.getFullIndo() ➞ "x = 76", "y = 29"

function СurrentСoordinates(x, y){
  this.x = x;
  this.y = y;

  this.getFullIndo = () => `x = ${this.x}, y = ${this.y}`
}

var place1 = new СurrentСoordinates(1,2);
console.log(place1.getFullIndo());
var place2 = new СurrentСoordinates(76,29);
console.log(place2.getFullIndo());




/*
2. Ваша задача - создать класс Circle, который создает круг с радиусом, заданным аргументом. Построенные круги должны иметь два метода-геттера getArea() ((PI) * r^2) и getPerimeter() ((2 * PI) * r), которые дают  соответствующую площадь, так и периметр (окружности).

PI = 3.14

*/


// var circle1 = new Circle(10);

// circle1.getArea() ➞ 314.16 

// circle1.getPerimeter() ➞ 62.83



// var circle2 = new Circle(2.5);

// circle1.getArea() ➞ 19.63

// circle1.getPerimeter() ➞ 15.71

function Circle(r){
  this.PI = 3.14
  this.r = r

  this.getArea = () => (this.PI) * (this.r**2)
  this.getPerimeter = () => (this.PI * 2) * this.r
}

var circle1 = new Circle(10);
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
var circle2 = new Circle(2.5);
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


/* 3. Создайте класс MagicStr  у которого будут следующие методы:

magic.replace ("string", 'char', char') -  метод, который заменяет все указанные символы другими символами.
magic.strLength ("string") - метод, которая возвращает длину строки.
magic.trim ("строка    ") - метод, который возвращает строку, которая обрезает пробелы как в начале, так и в конце.
magic.listSlice (list, tuple) - метод, который возвращает элементы в списке, которые находятся среди указанных индексов. Если длина нового списка равна 0, верните -1.


var magic = new MagicStr();

magic.replace("AzErty-QwErty", "E", "e") ➞ "Azerty-Qwerty"

magic.strLength("hello world") ➞ 11

magic.trim("      javascript is awesome      ") ➞ "javascript is awesome"

magic.listSlice([1, 2, 3, 4, 5], (2, 4)) ➞ [ 2, 3, 4 ]
*/

function MagicStr(){
  this.replace = (str, oldW, newW) => str.replace(RegExp(oldW, 'ig'), newW)
  this.strLength = (str) => str.length 
  this.trim = (str) => str.trim()
  this.listSlice = (arr, slice) => arr.slice(slice[0] - 1, slice[1]); 
}

var magic = new MagicStr();
console.log(magic.replace("AzErty-QwErty", "E", "e"));
console.log(magic.strLength("hello world"));
console.log(magic.trim("      javascript is awesome      "));
console.log(magic.listSlice([1, 2, 3, 4, 5], [2, 4]));

// 4.Создайте класс с именем User и создайте способ проверки количества
// созданных пользователей (количества экземпляров),
// чтобы значение можно было получить как атрибут класса.

// u1 = new User("johnsmith10")
// User.userCount ➞ 1

// u2 = new User("marysue1989")
// User.userCount ➞ 2

// u3 = new User("milan_rodrick")
// User.userCount ➞ 3

// u1.username ➞ "johnsmith10"

// u2.username ➞ "marysue1989"

// u3.username ➞ "milan_rodrick

class User{
  constructor(name) {
    this.name = name;
    ++User.userCount;
  }

  static userCount = 0;
}

u1 = new User("johnsmith10")
console.log(User.userCount); // 1
u2 = new User("marysue1989")
console.log(User.userCount); // 2
u3 = new User("milan_rodrick")
console.log(User.userCount); // 3
