// Task 1. Вам дана пагинация. При нажатии на стрелочки влево и вправо сделайте так, чтобы активным становился следующий элемент. Например если сейчас активно число 1, то кликнув на правую кнопку становится активным число 2.

let left = document.querySelectorAll('#custon-pag i')[0],
    right = document.querySelectorAll('#custon-pag i')[1]


right.addEventListener('click', (e) => {
    let active = document.querySelector('.active'),
        nextElement = active.nextElementSibling;

    if (nextElement.id){
       let firstElement = document.querySelectorAll('#custon-pag li')[1]

       firstElement.classList.add('active')
       active.classList.remove('active')
    } else {
        nextElement.classList.add('active')
        active.classList.remove('active')
    }

})

left.addEventListener('click', () => {
    let active = document.querySelector('.active'),
    previousElement = active.previousElementSibling;

    if (previousElement.id){
        let lastElement = document.querySelectorAll('#custon-pag li')[5]

        lastElement.classList.add('active')
        active.classList.remove('active')
    } else {
        previousElement.classList.add('active')
        active.classList.remove('active')
    }
})


// Task2. В файле script.js вам дан массив allButtons. Элементы массива представлены в виде строки. Напишите функцию, которая пробегается по этому массиву через цикл, и создает столько кнопок сколько есть элементов массива, и название для кнопки берите из элемента массива. Можете внутри div id="box-btn" заккоментировать для примера представленные кнопки, и в этом контейнере отрисовать кнопки из данных массива allButtons.

var allButtons = ['Button 1', 'Test Btn', 'Open Link', 'To News', 'Modal Window','Best Btn'];

let boxBox = document.querySelector('#box-btn')
boxBox.innerHTML = ''

allButtons.map(item => {
    boxBox.insertAdjacentHTML('beforeend', `<a class="waves-effect waves-light btn" style="margin: 5px">${item}</a>`)
})

// Task3. В файле script.js вам дан массив allCollection. Элементы массива представлены в виде строки. Напишите функцию, которая пробегается по этому массиву через цикл, и создает столько элементов списка(таблицы) сколько есть элементов массива, и название для элемента таблицы берите из элемента массива. Также при клике на каждый элемент таблицы, создайте модальное окно, которое при клике на элемент таблицы будет выводить текст содердимого(можно в alert).

var allCollection = ['Elem1', 'Hello World!', 'I love JS', 'Simple Element', 'Item 5'];

let collection = document.querySelector('#collection-list'),
    currModal = document.querySelector('#modal1'),
    closeModalBtn = document.querySelector('.modal-close');

collection.innerHTML = ''

allCollection.map(item => {
    collection.insertAdjacentHTML('beforeend', `<a href="#!" class="collection-item" data-modal>${item}</a>`)
})


collection.addEventListener('click', e => {
    let currModalText = document.querySelector('.modal-content p')

    if (e.target.tagName === 'A'){
        // alert(e.target.innerText)
        currModal.classList.add('open')
        currModal.style = "z-index: 1003; display: block; opacity: 1; top: 10%; transform: scaleX(1) scaleY(1);"
        currModalText.innerText = e.target.innerText
    }
})

closeModalBtn.addEventListener('click', () => {
    currModal.classList.remove('open')
    currModal.style = ''
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
        currModal.classList.remove('open')
        currModal.style = ''
    }
})

// Task 4. При нажатии на корзину, должно происходить удаление задачи из списка. Когда не останется задач, вывести текст "Empty to-do".

let ulCollection = document.querySelector('.collection.container')

ulCollection.addEventListener('click', (e) => {

    if (e.target.closest('a').classList.contains('secondary-content')){
        e.target.closest('li').remove()
    }
    
    if(ulCollection.childElementCount === 0){
        ulCollection.insertAdjacentHTML('afterbegin', '<a data-a>Empty to-do</a>')
    }
    
})

// Task 5. Напишите скрипт, который при клике на ячейку с текстом "red" выделит красным цветом данную ячейку . Ячейки, которые имеют надпись "blue" при клике меняют цвет на синий.(Используйте делегирование)

let blocksContainer = document.querySelector('.container1')

blocksContainer.addEventListener('click', (e) => {
    let block = e.target

    if (block.innerText === 'red'){
        block.style.background = 'red'
    }
    if (block.innerText === 'blue'){
        block.style.background = 'blue'
    }
})


// Task 6. Дан селект. По изменению селекта выведите картинку, информация о годе(год Год основания, победитель лиги чемпионов...) выбранного пункта. Обратите внимание, если некоторой информации нет (например команда не имеет кубков лиги европы) тогда вывести сообщение "На данный момент нет кубков". Данные берем из массива infoList.

var infoList = [
    {
        id: 1,
        name: 'Манчестер Юнайтед',
        yearFoundation: 1878,
        championsLeague: [1968, 1999, 2008],
        europaLeague: [2017],
        url: './images/footbal/manchester.png'
    },
    {
        id: 2,
        name: 'Барселона',
        yearFoundation: 1899,
        championsLeague: [1992, 2006, 2009, 2011, 2015],
        europaLeague: [],
        url: './images/footbal/barcelona.png'
    },
    {
        id: 3,
        name: 'ПСЖ',
        yearFoundation: 1970,
        championsLeague: [],
        europaLeague: [],
        url: './images/footbal/psg.png'
    },
    {
        id: 4,
        name: 'Ювентус',
        yearFoundation: 1897,
        championsLeague: [1985, 1996],
        europaLeague: [],
        url: './images/footbal/juventus.png'
    },
    {
        id: 5,
        name: 'Бавария',
        yearFoundation: 1900,
        championsLeague: [1974, 1975, 1976, 2001, 2013, 2020],
        europaLeague: [],
        url: './images/footbal/bayern.png'
    }
]

let currSelect = document.querySelector('.browser-default'),
    clubIMG = document.querySelector('.club-image img'),
    clubInfoText = document.querySelectorAll('.club-info h5');


currSelect.addEventListener('change', () =>{
    let clubInfo = infoList.find(item => item.id === +currSelect.value);

    clubIMG.src = clubInfo.url;
    clubInfoText[0].innerText = clubInfo.yearFoundation;
    clubInfoText[1].innerText = clubInfo.championsLeague;
    clubInfo.europaLeague.length ? clubInfoText[2].innerText = clubInfo.europaLeague : clubInfoText[2].innerText = "На данный момент нет кубков"
})

// Task 7. Есть список людей. Отсортируйте этот список по возрасту(за сортировку берем число, начиная с младшего до старшего). При клике на кнопку выполнить сортировку.

const sortBtn = document.querySelector('[data-sort]')
let ages = document.querySelectorAll('tbody tr'),
    tableBody = document.querySelector('tbody');


sortBtn.addEventListener('click', () => {
    tableBody.innerHTML = '';

    [...ages].sort( (a,b) => Number(a.firstElementChild.innerText) - Number(b.firstElementChild.innerText))
             .map(item => tableBody.insertAdjacentElement('beforeend', item));

})


/**Task8 */

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
        item.includes(searchInput.value) && searchInput.value !== '' ? liList.insertAdjacentHTML('beforeend', `<li style="color: yellow;">${item}</li>`) : liList.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    })

})

