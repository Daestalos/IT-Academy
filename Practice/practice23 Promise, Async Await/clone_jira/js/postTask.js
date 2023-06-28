const postTask = async (event) => {
    event.preventDefault();

    const data = {};

    const formItems = document.querySelector('.info-task').elements;
    for(let i = 0; i < formItems.length - 2; i++){
        data[formItems[i].name] = formItems[i].value;
    }

    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    }

    try{
        const response = await fetch(TASKS_URL, settings);
        const data = await response.json();
        console.log(data);
        closeIssueForm();
        renderTasks();
    }catch(e){
        console.log(e);
    }
}

document.querySelector('.add')
.addEventListener('click', postTask);