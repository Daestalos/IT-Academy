// Task1. У вас есть список задач. При клике на кнопку "редактировать" откройте модальное окно alert, где пользователь введет новое название задачи.

let todoList = document.querySelector('#todo-list')

// мой код

// todoList.addEventListener('click', (e)=>{
//     if (e.target.classList.contains('btn')){
//         let value = prompt('Задайте значение')
//         e.target.previousElementSibling.innerText = value; 
//     }
// })

// код Дениса


todoList.addEventListener('click', (e)=>{
    let btnElement = e.target,
        titleTodo = e.target.previousElementSibling;
    
    if (btnElement.tagName === 'A'){
        let newTitle = prompt('Editing?', titleTodo.innerText)
        titleTodo.innerText = newTitle;
    }
    
})

// Task2. У вас есть input, который должен вывести квадрат выбранного вами числа. При клике на любое число выведите в input результат.

let numbers = document.querySelector('#numbers'),
    input = document.querySelector('#numbers input');

numbers.addEventListener('click', (e) => {
    if (e.target.tagName === 'A'){
        input.value = Math.pow(+e.target.innerText, 2)
    }
})

// Task3. Дан ul, в нем несколько li. Под ul есть кнопка, при нажатии на которую в конец ul будет добавляться новый li с текстом 'task №..'. Сделайте так, чтобы при клике на каждый li, происходило зачеркивание задания. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

let menuList = document.getElementById('menuList'),
    btnAddMenu = document.querySelector('#btnAdd');

btnAddMenu.addEventListener('click', () => {
    menuList.insertAdjacentHTML('beforeend', `<li>task ${++menuList.lastElementChild.innerText.split(' ')[1]}</li>`)
})

menuList.addEventListener('click', (e) => {
    e.target.classList.toggle('textDecoration')
})

// от Дениса

btnAddMenu.addEventListener('click', () => {
    menuList.insertAdjacentHTML('beforeend', `<li>task ${++menuList.lastElementChild.innerText.split(' ')[1]}</li>`)
})

menuList.addEventListener('click', (e) => {
    e.target.classList.toggle('textDecoration')
})

// Task4. Есть поля ввода. Необходимо, чтобы при потери фокуса input, добавлялась проверка своего содержимого на правильное количество символов. Количество символов (правильное), указывается в атрибуте data-length. Если записано правильное количество, то граница инпута становится зеленой, если неправильное - красной, и ниже выводится сообщение "Неправильное количество символов. Необходимо ввести 3 символа".

let form = document.querySelector('form');

form.addEventListener('focusout', (e) => {
    if (e.target.value.length !== e.target.dataset.length) {
        e.target.style.border = "1px solid red";
        if (e.target.nextElementSibling === null){
            e.target.closest('div').insertAdjacentHTML('beforeend', `<a>Неправильное количество символов. Необходимо ввести ${e.target.dataset.length} символов</a>`)
            e.target.nextElementSibling.style.color = 'red'
        }
    }
    if (e.target.value.length === e.target.dataset.length) {
        e.target.nextElementSibling.remove();
        e.target.style.border = "1px solid green";
    }
})

// от Дениса

// let inputs = document.forms[0].elements;

// for(let input of inputs){
//     input.addEventListener('blur', function(event){
//         let correctLength = Number(event.target.dataset.length);
//         let currentValue = event.target.value.length;

//         if(correctLength === currentValue){
//             event.target.classList.add('green-border');
//         }
//     })
// }


// Task 5. При клике на кнопку "Посчитать сумму" умножьте количество выбранного товара на его цену. Количество выбранного товара можно изменять при клике на кнопки "+1" и "-1".(По желанию, добавьте проверку, чтобы нельзя было выбрать меньше 0 товаров.)

let incAndDecBtns = document.querySelectorAll('.card-action a'),
    inputTotal = document.querySelector('.total'),
    currentTotal = document.querySelector('#current-total'),
    price = +document.querySelector('.price').innerText,
    calculateBtn = document.querySelectorAll('#current-cart a')[2]

incAndDecBtns[0].addEventListener('click', () => {
    let value = +inputTotal.value
    inputTotal.value = --value
})

incAndDecBtns[1].addEventListener('click', () => {
    let value = +inputTotal.value
    inputTotal.value = ++value
})

calculateBtn.addEventListener('click', () =>{
    currentTotal.innerText = price * inputTotal.value;
})