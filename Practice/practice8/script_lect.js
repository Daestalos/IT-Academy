function Calculator(){
    this.add = function(par1, par2){
        return par1 + par2;
    }
    this.subtract = function(par1, par2){
        return par1 - par2;
    }
}

let calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10,5));



function Player(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.getAge = function(){
        return this.name + ' ему/ей ' + this.age;
    }
}

var p1 = new Player("David Jones", 25, 175, 75);
console.log(p1.getAge());





function Employee(name, lastname){
    this.name = name;
    this.lastname = lastname;

    this.getFullName = function(){
        return this.name + ' ' + this.lastname;
    }
}

var emp1 = new Employee("John", "Smith");
console.log(emp1.getFullName());



function User2(age, name){
    this.age = age;
    this.name = name;

    this.getInfo = function(){
        return `${this.age} ${this.name}`
    }
}

let user10 = new User2(16, 'Peter')

function getClickInfo (){
    let info = user10.getInfo()
    alert(info)
}

// getClickInfo()
<button onclick="getClickInfo()">информация</button>