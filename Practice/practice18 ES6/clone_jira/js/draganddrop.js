
// ### drag and drop tasks

// get id from draggable element
function drag(e){
    e.dataTransfer.setData('text', e.target.id);
}


function initDragAndDrop(){
    const colList = document.querySelectorAll('.task-col1');
    const tasks = document.getElementsByClassName('task-item');

    // access to drag and drop for tasks and add event for task
    for (let task of tasks){
        task.draggable = true
        task.addEventListener('dragstart', drag)
    }

    for (let colItem of colList){
        colItem.addEventListener('dragover', allowDrop)
        colItem.addEventListener('drop', drop)
    }


}

function allowDrop(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    const taskData = e.dataTransfer.getData('text'),
          taskItem = document.getElementById(taskData);
    
    if (!e.target.closest('.task-item')){
        e.target.insertAdjacentElement('beforeend', taskItem);
    } else {
        e.target.closest('.all-tasks').insertAdjacentElement('beforeend', taskItem);
    }

}

initDragAndDrop();