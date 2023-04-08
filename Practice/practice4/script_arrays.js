// 1. Создайте функцию, которая принимает два массива, и склеивает массивы вместе. Обязательно после склиевания массива, нужно их отсортировать по возрастанию.


// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[5, 6], [1, 2]]) ➞ [1, 2, 5, 6]]


function tuckIn(array1, array2){
    let newArray = [];
    
    if (array1 && array2) {
        return newArray.concat(...array1, ...array2).sort( (a, b) => a - b)
    } else if (typeof array2 == "undefined") {
        return newArray.concat(...array1).sort( (a, b) => a - b)
    } else if (typeof array1 == "undefined") return newArray.concat(...array1).sort( (a, b) => a - b)
    
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[5, 6], [1, 2]]));

 
 

 

