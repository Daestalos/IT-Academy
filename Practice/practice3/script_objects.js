//1.50-30-20 Стратегия

/*Стратегия 50-30-20 - это простой способ составления бюджета, который включает в себя расходование 50% дохода после уплаты налогов 
на нужды, 30% дохода после уплаты налогов на потребности и 20% дохода после уплаты налогов на сбережения или погашение долга.

Учитывая доход после уплаты налогов как (expenses - нахвание объекта), вы должны создать функцию, которая вернет объект, показывающий, сколько человеку
нужно потратить на нужды, потребности и сбережения.

fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
*/



function fiftyThirtyTwenty(expenses) {
    let obj = {}
    obj.Needs = expenses * 0.50;
    obj.Wants = expenses * 0.30;
    obj.Savings = expenses * 0.20
    console.log(obj);
}
 
fiftyThirtyTwenty(10000)
fiftyThirtyTwenty(50000)
fiftyThirtyTwenty(13450)


//2.Напишите функцию, которая преобразует объект в массив, где каждый элемент представляет из себя пару ключ-значение в форме массива.

/* toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ [] */

//Вернуть пустой массив, если объект пуст.



function toArray(obj){
    let array = [];

    for (let key in obj){
        array.push([key, obj[key]]);
    }
    return array
}

console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({}));



 





//3. Разница(Выйгрыши и поражения футбольного клуба) 

/*Для объекта, содержащего количество побед и поражений, верните, какое количество разницы должно отображаться.
 Это рассчитывается путем вычитания количества побед от количества поражений.


 matchDifference({ wins: 12, losing: 8 }) ➞ 4
 matchDifference({ wins: 7, losing: 13 }) ➞ -6
 matchDifference({ wins: 10, losing: 10 }) ➞ 0
*/


function matchDifference(obj){
    console.log(obj.wins - obj.losing);
}

matchDifference({ wins: 12, losing: 8 })
matchDifference({ wins: 7, losing: 13 })
matchDifference({ wins: 10, losing: 10 })








console.log((true+true) * (true+true) - true);