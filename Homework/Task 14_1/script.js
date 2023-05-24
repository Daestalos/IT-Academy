
// Task 1. Есть список задач. При клике на текст задачи перечеркните ее, если она перечеркнута сделайте ее обратно активной.

// let todoListLi = document.querySelectorAll('#todo-list > li');

// todoListLi.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.classList.toggle('task-no-active')
//     })
// })

// от Дениса
let ulList=  document.querySelector('#todo-list');

ulList.addEventListener('click', (e) => {
    if (e.target.tagName === 'P'){
        e.target.classList.toggle('task-no-active')
    }
})

// Task 2. У вас дан список вопросов(в виде аккордеона). Ответы скрыты под ними. При клике на любой из вопросов снизу раскройте ответ. Используйте класс под названием "answer-item-show" чтобы ответ на вопрос можно было отобразить.

let collection = document.querySelector('.collection')

collection.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.nextElementSibling.classList.toggle('answer-item-show')
    }
})

// Task 3. При клике на кнопку "open info" откройте модальное окно. Чтобы его открыть добавьте к элементу "div id="modal1"" класс под названием "modal_open". Когда модальное окно будет открыто, вам необходимо при нажатии на любое место страницы скрыть модальное окно, но только не при нажатии на само окно.

let openModalBtn = document.querySelector('#open-modal'),
    modal = document.querySelector('#modal1')

openModalBtn.addEventListener('click', () => {
    modal.classList.toggle('modal_open')
})

document.body.addEventListener('click', (e) => {
    if (openModalBtn !== e.target && !e.target.closest('#modal1')){
        modal.classList.remove('modal_open')
    }
})

// Task 4. Галерея. При нажатии на картинку ниже(миниатюру), открыть ее основное изображение. (Делегирование)

const photo = document.querySelector('.photo > img'),
      imageBtns = document.querySelectorAll('.image');

imageBtns.forEach(item => {

    item.addEventListener('click', () => {
        imageBtns.forEach(item => item.classList.remove('active-image'))
        item.classList.add('active-image');
        photo.src = item.firstElementChild.src;
    })
})

// Task 5. Есть список задач для пользователей. Отсортируйте этот список по алфавиту(за сортировку берем имя пользователя).

const sortBtn = document.querySelector('#sort'),
      todo = document.querySelector('#todo'),
      todoListItems = document.querySelectorAll('#todo li');

sortBtn.addEventListener('click', () => {
    todo.innerHTML = '';
    [...todoListItems].sort((a,b) => (a.firstElementChild.innerText.toLowerCase() > b.firstElementChild.innerText.toLowerCase()) - (a.firstElementChild.innerText.toLowerCase() < b.firstElementChild.innerText.toLowerCase())
    ).forEach(item => {
        todo.innerHTML += `<li>${item.innerHTML}</li>`
    })
})