function User(fName, age, email){
    // this = {} (неявный объект)
    // публичное свойство и методы
    this.fName = fName; // добавили объекту свойство fName
    this.age = age; // публичное свойство
    var self = this; // чтобы не терялся this

    this.getName = function(){ // публичный метод
        return 'My name' + this.fName;
    }

    // приватное свойство и методы (не привязываем к this, объявляем как обычную переменную)
    var email = email;
    // изменить приватное свойство за пределами класса нельзя, при помощи дополнительного публичного метода мы можем получить это свойство и как-то с ним взаимодействовать
    this.getPublicEmail = function(){
        return 'My privat email ' + email; // при работе с приватными свойствами this не нужен
    }

    var getPrivateAge = function(){
        return 'Age:' + self.age
    }
    // обратиться к приватному методу снаружи нельзя (ошибка метод is not a function)
    // для вызова мы можем вызвать его внутри какого-то публичного метода, чтобы посмотреть его выполнение
    this.getPrivate = function(){
        return getPrivateAge();
    }
}

let user1 = new User('Max', 21, 'test@email.com');
console.log(user1);
// =
// User {
//     fName: 'Max',
//     age: 21,
//     getName: [Function (anonymous)],
//     getPublicEmail: [Function (anonymous)],
//     getPrivate: [Function (anonymous)]
// }
console.log(user1.getPublicEmail()); // My privat email test@email.com
console.log(user1.getPrivate()); // Age:21

// можем работать с ними как с обычными объектами
console.log('age' in user1); true


// instanceof - принадлежит ли объект классу
console.log(user1 instanceof User); // = true

// <---------------------------------------------- Наследование (функциональный стиль) ------------------------------------------------>

// Класс человек, имеющий набор определенных характеристик
function Human(age, name){
    this.age = age;
    this.name = name;

    this.getInfo = function(){
        return `${this.name}, ${this.age}`
    }
}

// Класс работник, который будет наследовать свойства класса человек
function Worker(age, name, salary, specialization){
    // Для наследования от родительского класса требуется обратиться к родительскому классу и использовать метод call
    // В метод call (this, свойства, который мы хотим наследовать, например age и name)
    Human.call(this, age, name)
    // добавим свойства Worker
    this.salary = salary;
    this.specialization = specialization;
}

let human = new Human(18, 'Peter');
let worker = new Worker(27, 'Bob', '1000$', 'software ing.');

console.log(human); // = Human { age: 18, name: 'Peter', getInfo: [Function (anonymous)] }
// все публичный свойства и методы унаследуются к дочернему
console.log(worker); // =
// Worker {
//     age: 27,
//     name: 'Bob',
//     getInfo: [Function (anonymous)],
//     salary: '1000$',
//     specialization: 'software ing.'
// }

console.log(human.getInfo()); // Peter, 18
console.log(worker.getInfo()); // Bob, 27


// Наследование (прототивный стиль)

// в script_prototype.js

// <--------------------------- __proto__ --------------------------->

let user2 = {
    age: 30,
    name: 'Alex',
    isAdmin: true
}

let userTest = {
    age: 26,
    isUser: true
}

// Прототип - объект, у которого можно наследовать свойства

user2.__proto__ = userTest;
console.log(user2); // = { age: 30, name: 'Alex', isAdmin: true }
console.log(userTest); // = { age: 26, isUser: true }
console.log(user2.isUser); // = true (имеем доступ к свойству isUser)
console.log(user2.age); // = 30

// Мы имеем доступ к свойствам только прототипа только в виде чтения

// В качестве прототипа мы можем указать не только 1 какой-то объект
let test1 = {
    test111: 'test111',
    test222: 'test222'
}

userTest.__proto__ = test1
console.log(user2.test111); // = test111



// Полиморфизм

function Student(age, name){
    this.name = name;
    this.age = age;
}

function getFullInfo(obj){
    console.log(obj.age, obj.name);
}

let stud = new Student(12, 'alex')
getFullInfo(stud)