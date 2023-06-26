// const TASKS_URL = 'https://649127532f2c7ee6c2c7ccc6.mockapi.io/v1/tasks';

const renderTasks = () => {
    fetch(TASKS_URL)
    .then(
      response => {
        return response.json();
      }
    )
    .then(data => {
      // console.log(data);
      data.forEach(task => {
        const colContainer = 
        document.querySelector(`.task-col1[data-id="${task.colId}"] .all-tasks`);
        colContainer.innerHTML += `
        <a class="task-item" id="drag${task.id}" data-id="${task.id}" href="#">
          <div class="task-info">
              <p class="descr">
                  ${task.shortSummary}
              </p>
              <div class="task-about">
                  <div>
                      <i class="material-icons current-state">done</i>
                      <i class="material-icons current-progress">arrow_upward</i>
                  </div>
                  <div class="avatar">
                      <div class="avatar-img">
  
                      </div>
                  </div>
              </div>
          </div>
      </a>
        `
      });

      initDragAndDrop();
      counterTasks();
    });  
}

renderTasks();