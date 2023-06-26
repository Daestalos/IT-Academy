let inputData = document.querySelector('#inputTask'),
    ulList = document.querySelector('#list')
    btnAddTask = document.querySelector('#btn-add'),
    liList = document.getElementsByTagName('li'),
    activeList = document.querySelector('.activeTask'),
    unactiveList = document.querySelector('.unactiveTask');
    
const myModal = document.querySelector('#myModal'),
      modalOpenBtn = document.querySelector('#modalBtn'),
      modalCloseBtn = document.querySelector('.btn-close');

// # for open Modal
modalOpenBtn.addEventListener('click', () => myModal.classList.toggle('show'));

// # for close Modal
modalCloseBtn.addEventListener('click', () => myModal.classList.toggle('show'));

// ### Render Tasks from LocalStorage
function renderLi(){
    ulList.innerHTML = localStorage.getItem('todo-data')
}

renderLi()

// # for count active and unactive tasks
function countActiveLi(){
    let active = 0, unactive = 0;
    for (let item of liList){
        item.classList.contains('closetext') ? unactive++ : active++
    }
    activeList.innerText = `Активные задачи: ${active}`
    unactiveList.innerText = `Неактивные задачи: ${unactive}`
}

countActiveLi();

// # add close-line for text
function closeText(){
    for (let item of liList){
        item.addEventListener('click', () => {
            item.classList.toggle('closetext')
            countActiveLi();
        })
    }

}

// ### add Task to Task List and Post to server

const postData = () => {
    let inpustValue = inputData.value;

    if (inpustValue) {
        inputData.value = '';
        const currentDate = new Date(),
        time = currentDate.toLocaleString();

        fetch(`https://6491f0572f2c7ee6c2c92fc1.mockapi.io/v1/tasks`, {
            method: 'POST',
            body: JSON.stringify({
                    "createdAt": time,
                    "taskName": inpustValue
                }),
            headers: {
                "Content-type": "application/json; charset=utf-8"
        
            }
        })
        .then(req => req.json())
        .then(data => console.log('POST: ', data))
        .then( getData() )

    }
}

btnAddTask.addEventListener('click', postData)


// # Remove Task from Task List
function removeTask(){
    let spans = document.querySelectorAll('span');
    
    for(let spanItem of spans){
        spanItem.addEventListener('click', () => spanItem.parentElement.remove())
    }
}

removeTask();
closeText();

// ### save li todo to localStorage
document.querySelector('[data-save]').addEventListener('click', ()=>{
    localStorage.setItem('todo-data', ulList.innerHTML)
    console.log(ulList.innerHTML);
})

// ### clear all data from localStorage
document.querySelector('[data-clear]').addEventListener('click', ()=>{
    localStorage.clear();
    ulList.innerText = ''
    countActiveLi();
})



// ### Get data from https://6491f0572f2c7ee6c2c92fc1.mockapi.io/v1/tasks

const getDataBtn = document.querySelector('[data-get]')

const getData = () => {
    fetch(`https://6491f0572f2c7ee6c2c92fc1.mockapi.io/v1/tasks`)
    .then( req => req.json())
    .then( data => {
        ulList.innerText = ''
        data.map(liItem =>  ulList.insertAdjacentHTML('beforeend', `<li><a>${liItem.id}: </a><a>${liItem.createdAt} </a> ${liItem.taskName} <span>DELETE</span></li>`));
        countActiveLi();
        removeTask();
        closeText();
    })
    .catch( err => console.log('Error:', err))

}

getDataBtn.addEventListener('click', getData)