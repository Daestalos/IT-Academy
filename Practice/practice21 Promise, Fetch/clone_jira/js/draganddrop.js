function drag(event){
    event.dataTransfer.setData('text', event.target.id);
    event.target.style.opacity = '0.7';
    // определили id выбранного элемента
}

const dragStart = (event) => {
    event.target.closest('.task-item').classList.add('over');
}

const dragEnd = (event) => {
    const allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach((task) => {
        task.classList.remove('over');
    })
    event.target.style.opacity = 1;
}

function initDragAndDrop(){
    const colList = document.getElementsByClassName('task-col1');
    const tasks = document.getElementsByClassName('task-item');

    for(let task of tasks){
        task.draggable = true;
        task.addEventListener('dragstart', drag);
        task.addEventListener('dragenter', dragStart);
        task.addEventListener('dragend', dragEnd);
    }

    for(let colItem of colList){
        colItem.addEventListener('dragover', allowDrop);
        colItem.addEventListener('drop', drop);
    }
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const taskData = event.dataTransfer.getData('text');
    const taskItem = document.getElementById(taskData);
    const headColumn = event.target.closest('.head-task');
    if(event.target.closest('.task-item')){
        event.target.closest('.task-item').parentElement
        .insertBefore(event.target.closest('.task-item'), taskItem);
    } else if(headColumn) {
        event.target.nextElementSibling
        .insertAdjacentElement('beforeend', taskItem)
    } else {
        event.target.insertAdjacentElement('beforeend', taskItem);
    }
    
    counterTasks();
}

initDragAndDrop();


