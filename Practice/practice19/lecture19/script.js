 let person = {
    fName: 'Peter',
    age: 29,
    getAge: function(){
        return this.age;
    }
 }

//  console.log(person.getAge())

var age1 = 100;
var name = 'Max';
let age2 = 66;

function getFullInfo(){
    return this.age2;
}

// console.log(getFullInfo());

let person2 = {
    fName: 'Bob',
    age: 25,
    getName: () => {
        return this.fName;
    },
    getAge: function(){
        return this.age;
    },
    getInfo: function() {
        setTimeout(() => {
            console.log('Fname = ', this.fName);
        }, 0)
    }
}

// console.log(person2.getName())
// console.log(person2.getAge())
// console.log(person2.getInfo())