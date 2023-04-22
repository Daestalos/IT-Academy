/*1. Объявите класс под названием Square. "a" - это сторона квадрата(у квадрата все стороны равны). Напишите следующие методы:
  calculatePerimeter() - вычисляет периметр квадрата. Формула("a" * 4);
  calculateArea() - вычисляет площадь квадрата. Формула ("a" * "a");

  Объявите класс Rhombus. "a" - это сторона ромба(у ромба все стороны равны), "h" - высота ромба. Создайте для этого класса 2 метода:
  calculatePerimeter() - вычисляет периметр ромба. Формула("a" * 4);
  calculateArea() - вычисляет площадь ромба. Формула("a" * "h").
*/

function Square(a) {
  this.a = a;

  this.calculatePerimeter = () => this.a * 4
  this.calculateArea = () => this.a * this.a
}

function Rhombus(a, h){
  Square.call(this, a)
  this.h = h;

  this.calculateArea = () => this.a * this.h
}

let square = new Square(4);
let rhomb = new Rhombus(4, 5)

console.log(square.calculatePerimeter()); // 16
console.log(square.calculateArea()); // 16
console.log(rhomb.calculatePerimeter()); // 16
console.log(rhomb.calculateArea()); // 20


/*2.  Создайте пример наследования. Реализуйте класс Student и класс Aspirant. Аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит поля: firstName, lastName, group, класс Aspirant также имеет такие поля. А также, averageMark, содержащую средний балл.
б) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 10, то сумма 100 руб, иначе 80. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 10, то сумма 200 руб, иначе 180.
 */

function Student(firstName, lastName, group, averageMark){
  this.firstName = firstName;
  this.lastName = lastName;
  this.group = group;
  this.averageMark = averageMark

  this.getScholarship = () => this.averageMark === 10 ? 100 : 80
}

function Aspirant(firstName, lastName, group, averageMark, scienceWork){
  Student.call(this, firstName, lastName, group, averageMark)
  this.scienceWork = scienceWork

  this.getScholarship = () => this.averageMark === 10 ? 200 : 180
}

let student = new Student('Alex', 'D', '1A', 12)
let aspirant = new Aspirant('Tomas', 'M', '2B', 10, 'Data research')

console.log(student.getScholarship()); // 80
console.log(aspirant.getScholarship()); // 200