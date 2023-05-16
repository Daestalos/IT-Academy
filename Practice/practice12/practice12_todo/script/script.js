let inputData = document.querySelector('#inputTask'),
    btnAddTask = document.querySelector('#btn-add'),
    ulList = document.querySelector('#list');
// <li>Task1 <span>Delete</span></li>


btnAddTask.addEventListener('click', function createTask(){
    let inpustValue = inputData.value;
    inputData.value = '';

    // <li>Task1</li>
    let newLi = document.createElement('li')
    newLi.innerText = inpustValue;
    
    // <span>DELETe</span>
    let newSpan = document.createElement('Span')
    newSpan.innerText = ' DELETE';

    // <li>Task1 <span>DELETE</span></li>
    newLi.insertAdjacentElement('beforeend', newSpan);

    // добавляем в li
    ulList.insertAdjacentElement('beforeend', newLi);

    removeTask();
})

function removeTask(){
    let spans = document.querySelectorAll('span');
    
    for(let spanItem of spans){
        spanItem.addEventListener('click', () => spanItem.parentElement.remove())
    }
}

removeTask();
