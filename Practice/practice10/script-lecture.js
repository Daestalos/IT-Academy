let cat = {
    fullName: 'Barsik',
    age: 2,
    meow : function () {
        return `I'm Barsik`
    },
    getInfo: function (){
        return this.fullName + ' ' + cat.age;
    }
}

let cat1 = cat;
cat1.fullName = 'Tomas'

console.log(cat.meow());
console.log(cat.getInfo());