// let - var
// const - constant



/* if (true) {
    let a = 'Hello World!';
}

console.log(a);
 */
  


//Scope

/* console.log(b);

var b = 15; */

//Hoisting


// Array and Object (const)

const obj = {
    name: 'Peter',
    age: 30,
    descroption: {
        about: {
            prop2: 'test',
            prop3: 'qweqwe',
            prop4: 1,
            prop5: 2
        },
        prop1: 'jkhfkjwef'
    }
}

let [item1, item2] = [10, 20];
//console.log(item1, item2);




// console.log(obj.descroption.about.prop5 + obj.descroption.about.prop4);

// let { prop4, prop5 } = obj.descroption.about;
// console.log(prop4 + prop5);

// Spread

let arr1 = [1, 2, 4, 6, ];
const arr2 = [24, 1, 42, 72];

//console.log(...arr1)
console.log();

//const arr12 = Array.prototype.push.apply(arr1, arr2);
//console.log(arr1);



const arr3 = [...arr1, ...arr2];
// console.log(arr1);
//console.log(arr3);

/** */

const obj1 = {
    n1: 'Hello',
    n2: 'World'
};

const obj2 = {
    n3: 'By'
}

 var obj12 = Object.assign(obj2, obj1, );
// console.log(obj12, obj2);


let objEs6 = {
    ...obj2,
    ...obj1,
}


// console.log(obj12);
// console.log(objEs6)

/** */

const arrNext = [4, 12, 2];

function sum(a, b, c) {
    return (a + b) / c;
}

// console.log(sum(arrNext[0], arrNext[1], arrNext[2]));
// console.log(sum.apply(null, arrNext));
// console.log(sum(...arrNext));



//REST

function output( {prop1, prop2, ...REST}) {
    console.log(prop1, prop2, REST);
}

// output(15, 12, 12, 1, -1, 2.5, 24, 'sdfsfd');
// output({
//     prop1: '123',
//     prop2: '123a',
//     prop3: '123s',
//     prop4: '123d',
//     prop5: '123f',
//     prop6: '123g',
// })