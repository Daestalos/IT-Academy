// Домашнее задание TASKS_16_RANDOM_FUNC
// Вам необходимо написать функцию, которая случайным образом будет выводить 5 чисел в промежутке от 1 до 50.

// Причем важно,  чтобы хотя бы по одному числу было в промежутках: от 1 до 10, от 11 до 20, от 21 до 30, от 31 до 40, от 41 до 50.

// Например результат выполнения вашей функции: 5, 18, 22, 31, 50 или 2, 17, 23, 39, 42. (при кажддом вызове, числа должны случайно генерироваться).

function randomQuestion(qNumber, min, max) { 
     console.log(`Вопрос ${qNumber}: ${Math.floor(Math.random() * (max - min + 1) + min)}`);   
  }

let qOne = randomQuestion(1, 1, 10),
    qTwo = randomQuestion(2, 11, 20);
    qThree = randomQuestion(2, 21, 30);
    qFour = randomQuestion(2, 31, 40);
    qFive = randomQuestion(2, 41, 50);
    