//https://jsonplaceholder.typicode.com/users/1/todos 
// Выведите первые 4 задачи из данного списка. Обязательно нужно вывести название задачи, и текущее состоаяние выполнения(true/false)

const thirtyTodo = document.querySelector('#ten-tasks'),
      tenTodo = document.querySelector('#thirty-tasks'),
      nineTodo = document.querySelector('#ninth-task');

getAllTodos = (count = 4) => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos/?_limit=${count}`)
    .then(res => res.json())
    .then(data => {
        let todoList = document.querySelector('#todos')
        todoList.innerText = ''
        data.forEach(todo => {
            todoList.innerHTML += `
            <div class="card pink darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Todo ${todo.id}</span>
                  <p>${todo.completed}</p>
                </div>
            </div>
            `
        })

    })
}

getAllTodos();

getTodo = count => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(res => res.json())
    .then(data => {
        let todoList = document.querySelector('#todos')
        todoList.innerText = ''
        todoList.innerHTML += `
        <div class="card pink darken-1">
            <div class="card-content white-text">
                <span class="card-title">Todo ${data.id}</span>
                <p>${data.completed}</p>
            </div>
        </div>
        `

    })
}

thirtyTodo.addEventListener('click', () => getAllTodos(3))
tenTodo.addEventListener('click', () => getAllTodos(10))
nineTodo.addEventListener('click', () => getTodo(9))
