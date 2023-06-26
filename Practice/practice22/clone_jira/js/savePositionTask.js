const TASKS_URL = 'https://649127532f2c7ee6c2c7ccc6.mockapi.io/v1/tasks';

const savePositionTask = (currentElement, currentId) => {
    fetch(`${TASKS_URL}/${currentId}`)
    .then(
        response => {
            return response.json();
        }
    )
    .then(data => {
        // console.log(data);
        const settings = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                ...data,
                "colId": currentElement.dataset.id
            })
        }

        fetch(`${TASKS_URL}/${currentId}`, settings)
        .then(response => response.json())
        .then(data=> console.log('Put', data))

    })
}