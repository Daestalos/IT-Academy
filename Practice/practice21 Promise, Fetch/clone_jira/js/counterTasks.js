function counterTasks(){
    const counter = document.querySelectorAll('.head-task .task-counter')
    // const tasks = document.querySelector('.all-tasks')
    // .getElementsByClassName('task-item').length;
    const columnsTasks = document.querySelectorAll('.all-tasks');
    columnsTasks.forEach((column, index) => {
        const currentTasks = column.
        getElementsByClassName('task-item').length;

        counter[index].innerHTML = currentTasks;
    })

    // counter.innerHTML = tasks;
}

counterTasks();
