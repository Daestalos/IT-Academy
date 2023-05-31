
function closePreloader(){
    let preloader = document.querySelector('#preloader'),
        content = document.querySelector('#site');

    preloader.style.display = 'none';
    content.style.opacity = '1';
}

setTimeout(closePreloader, 0);


// Task1. Дан квадрат. Сделайте так, чтобы при двойном клике на него он красился в синий цвет.

const quad = document.querySelector('#quad');
quad.addEventListener('click', () => quad.classList.toggle('container-quad'))

// Task 2. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

const clubImage = document.querySelector('.club-image')

clubImage.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG'){
        alert(e.target.src)
    }
})

// Task3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.

const links = document.querySelectorAll('.link')

for (let link of links){
    link.addEventListener('mouseover', () => link.innerText += ` (${link.href})`)
}

// Task4. Напишите функцию, которая при клике на клавишу "Esc" удалит данную карточку.

const cardImage = document.querySelector('.card-image > img')

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
        cardImage.remove();
    }
})

// Task 5. Дан селект. По изменению селекта выведите текст выбранный в select справа от него.

const selecters = document.querySelector('#selecters'),
      selectersRetult = document.querySelector('#current-result');

selecters.addEventListener('change', () => {
    selectersRetult.innerText = selecters.value;
})


// Task6. Дана таблица с покупателями с тремя колонками: имя, продукт и цена. Под таблицей есть форма, с помощью которой можно будет добавить нового покупателями в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table). Ниже расположена форма, с 3 полями ввода. При нажатии на "добавить нового", происходит добавление нового пользователя. Нужно отметить, что если поле ввода пустое, то не добавляем новую задачу, пока пользователь не заполнит его.

let currentTable = document.querySelector('.row table'),
    inputForm = document.querySelector('#add-form')
    inputs = document.querySelectorAll('#add-form input');

currentTable.addEventListener('click', (e)=> {
    let currentTd = e.target;

    if (currentTd.tagName === 'TD'){
        let newText = prompt('Ввведите новый текст')
        currentTd.innerText = newText;
    }
})

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === ''){

    } else {
        currentTable.innerHTML += `<tr><td>${inputs[0].value}</td><td>${inputs[1].value}</td><td>${inputs[2].value}</td></tr>`
    }
    
})

// Task 7. Есть input, который является поисковиком. Вам необходимо реализовать живой поиск, чтобы при вводе любого символа в input происходило изменение цвета текста того товара который соответствует данному символу. Наприме при вводе двух букв "Мо" - мы должны выделить желтым цветом слово "Моль Молли" и "Моль".

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]

let liList = document.querySelector('#list'),
    searchInput = document.querySelector('input[type=search]');

searchInput.addEventListener('input', () => {
    liList.innerHTML = ''

    searchList.map(item => {
        // item.includes(searchInput.value)
        item.match(new RegExp(searchInput.value)) && searchInput.value !== ''
        ? liList.insertAdjacentHTML('beforeend', `<li style="color: yellow;">${item}</li>`)
        : liList.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    })

})

