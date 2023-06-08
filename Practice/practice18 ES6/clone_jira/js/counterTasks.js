
function counterTasks(){
    const counter = document.querySelector('.head-task .task-counter'),
          tasks = document.querySelectorAll('.all-tasks a').length;
    
    console.log(tasks);
    counter.innerText = tasks;
}

counterTasks();