
// <------------------------------------------ Классы ES6 -------------------------------------------------------->

class Person{
    constructor(fName, age){
        this.fName = fName;
        this.age = age;
    }

    getInfo(){
        return `My name is ${this.fName} and my age is ${this.age}`
    }
}

let person1 = new Person('Alexander', 18);
console.log(person1.getInfo()); // My name is Alexander and my age is 18



// <-------------------------------------- статические свойства и методы ------------------------------------------->

class  Counter{
    constructor(){}
    static count = 0 // статическое свойство
    static incCount() {
        this.count +=1
    }
    static getCount(){ // статический метод
        console.log(this.count);
    }

}
// Можем обращаться без создания нового экземпляра класса
Counter.getCount(); // 0
Counter.incCount();
Counter.incCount();
Counter.getCount(); // 2

// <------------------------------------------- Геттеры и сеттеры ----------------------------------------------------->

class Player{
    constructor(nickName, status){
        this.nickName = nickName;
        this.status = status;
    }

    get fullInfo(){
        return `Player is ${this.nickName}, current status is ${this.status}`
    }
    set fullInfo(infoStr){
        let allInfo = infoStr.split(' ');
        [this.nickName, this.status] = allInfo;
    }
}

let player = new Player('SteelWolf', 'on');
console.log(player.fullInfo); // Player is SteelWolf, current status is on
player.fullInfo = 'CuteWolf off';
console.log(player.fullInfo); // Player is CuteWolf, current status is off

 // пример

class Person2{
    constructor(fName, age){
        this._fName = fName; // делаем свойство приватным
        this.age = age;
    }

    get fName(){ // метод геттер, который будет возвращать fName
        return this._fName;
    }

    set fName(newName){ // сеттер для установки нового значения
        this._fName = newName;
    }

    getInfo(){
        return `My name is ${this.fName} and my age is ${this.age}`
    }
}

let person2 = new Person2('Alexander', 18);
console.log(person2); // Person2 { _fName: 'Alexander', age: 18 }
console.log(person2.fName); // используем геттер для вывода значения // = Alexander
person2.fName = 'Bob'
console.log(person2.fName); // Bob


 // <---------------------------------------------- Наследование ----------------------------------------------------->

 // наследование статический свойств и методов

 class Counter{
    static counterInfo(){
        return `about counter`
    }
 }

 class Repeater extends Counter{
    // constructor
    // methods
 }

 console.log(Repeater.counterInfo()); // about counter

 // super. Вызов родительского конструктора

// Ключевое слово super используется чтобы вызывать функции, которые есть в родительском классе. 
// super.getInfo();
// Если вызов super() происходит в конструкторе, это означает что он вызывает метод constructor родительского класса. 
// constructor(){ 
// super()  // вызов метода constructor в родительском классе
// }

