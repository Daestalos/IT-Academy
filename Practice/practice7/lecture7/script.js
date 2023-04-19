// Методы для перебора массивов. Функции высшего порядка.
//*forEach();
//*map();
//*filter(); find();
//*some(); every();
//*reduce(); reduceRight();


 

/* function(elem, index, array)*/ 


// 1.forEach()

 
let exampleArr = [1,2,3,4,5];
let newExampleArr = [];

/* exampleArr.forEach(function(elem, index ){
    //console.log(elem);
   // console.log(index)
}) */

// exampleArr.forEach(function(elem){
//     newExampleArr.push(elem + 10);
// })

/* newExampleArr = exampleArr.forEach(function(elem){
    return elem;
}) */

//console.log(newExampleArr);



// 2.map()

/* newExampleArr = exampleArr.map(function(elem){
    return elem;
})

console.log(newExampleArr);
 */
/* const info =[ 
{
    "id": 1,
    "age": 28,
    "phone": "+375291919191"
},
{
    "id": 2,
    "age": 28,
    "phone": "+375291919191"
},
{
    "id": 3,
    "age": 28,
    "phone": "+375291919191"
}]

exampleArr = info.map(function(elem){
    return{
        id: elem.id,
        phome: elem.phone
    }
}) */

// console.log(exampleArr);


// 3.filter();

/* exampleArr = exampleArr.filter(function(elem){
    return (elem  > 3 || elem === 2)  ; // !(elem % 2)
}) */

//console.log(exampleArr);

/* const info =[ 
    {
        "id": 1,
        "age": 19,
        "phone": "+375291919191"
    },
    {
        "id": 2,
        "age": 28,
        "phone": "+375291919191"
    },
    {
        "id": 3,
        "age": 24,
        "phone": "+375291919191"
    }]

    exampleArr = info.filter(function(elem){
        return elem.age > 20;
    })

    console.log(exampleArr);
 */


// 4. every(); some();

 let exampleArr1 = [1,2,3,4,5,-10,-1];

/* exampleArr1 = exampleArr1.every(function(elem){
    return elem > -100;
})

console.log(exampleArr1);
 */

// const info =[ 
//     {
//         "id": 1,
//         "age": 19,
//         "phone": "+375291919191"
//     },
//     {
//         "id": 2,
//         "age": 28,
//         "phone": "+375291919191"
//     },
//     {
//         "id": 3,
//         "age": 24,
//         "phone": ""
//     }]

//     exampleArr1 = info.every(function(elem){
//         return elem.phone;
//     })

//     console.log(exampleArr1);



 //5. reduce(); reduceRight();

/*  exampleArr1 = exampleArr1.reduceRight(function(sum, elem){
     return sum += elem;
 }, 100)

 console.log(exampleArr1);  */