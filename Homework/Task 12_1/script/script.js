let inputData = document.querySelector('#inputTask'),
    ulList = document.querySelector('#list')
    btnAddTask = document.querySelector('#btn-add'),
    liList = document.getElementsByTagName('li'),
    activeList = document.querySelector('.activeTask'),
    unactiveList = document.querySelector('.unactiveTask');
    
const myModal = document.querySelector('#myModal'),
      modalOpenBtn = document.querySelector('#modalBtn'),
      modalCloseBtn = document.querySelector('.btn-close');

// for open Modal
modalOpenBtn.addEventListener('click', () => myModal.classList.toggle('show'));

// for close Modal
modalCloseBtn.addEventListener('click', () => myModal.classList.toggle('show'));

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

// # add Task to Task List
btnAddTask.addEventListener('click', function createTask(){
    let inpustValue = inputData.value;
    if (inpustValue) {
        inputData.value = '';
        const currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();
    
        // <li>Task1</li>     
        let newLi = document.createElement('li')
        newLi.innerText = inpustValue;
        
        newLi.insertAdjacentHTML('afterbegin', `<a>${year}:${month}:${day}</a> `);
    
        // <span>DELETe</span>
        let newSpan = document.createElement('Span')
        newSpan.innerText = ' DELETE';
    
    
        // <li>Task1 <span>DELETE</span></li>
        newLi.insertAdjacentElement('beforeend', newSpan);
    
        // добавляем в li
        ulList.insertAdjacentElement('beforeend', newLi);
    
        removeTask();
        closeText();
        countActiveLi();
    } else alert('Введите значение в поле!')
    
})


// # Remove Task from Task List
function removeTask(){
    let spans = document.querySelectorAll('span');
    
    for(let spanItem of spans){
        spanItem.addEventListener('click', () => spanItem.parentElement.remove())
    }
}

removeTask();
closeText();

