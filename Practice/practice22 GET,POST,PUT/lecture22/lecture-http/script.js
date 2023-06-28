// Get
//https://64912cc92f2c7ee6c2c7d3d4.mockapi.io/v1/users
const USERS_API = 'https://64912cc92f2c7ee6c2c7d3d4.mockapi.io/v1/users';

const getData = () => {
    fetch(USERS_API).then(
        (req) => {
            return req.json();
        }
    ).then(
        (data) => console.log(data)
    ).catch(
        (err) => {console.log('Error:', err)}
    )
}
// getData();

document.querySelector('#get_data').addEventListener('click', getData)




// Post

const postData = () => {
    const inputData = document.querySelector('#fName').value;

    fetch(USERS_API, {
        method: 'POST',
        body: JSON.stringify({
                "name": inputData,
                "age": 25
            }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then( (req) => {
        return req.json();
    }).then((data) => {
        console.log('POST: ',data );
    })
}

document.querySelector('#post_data').addEventListener('click', postData);

// Put

const putData = () => {
    const inputData = document.querySelector('#fName').value;

    fetch(`${USERS_API}/9`, {
        method: 'PUT',
        body: JSON.stringify({
                "name": inputData,
                "age": 25
            }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then( (req) => {
        return req.json();
    }).then((data) => {
        console.log('PUT: ',data );
    })
}

document.querySelector('#put_data').addEventListener('click', putData);


// Delete

const deleteData = () => {
    fetch(`${USERS_API}/5`, {
        method: 'DELETE'
    }).then(
        (req) => req.json()
    ).then(
        data => console.log('Delete: ', data)
    )
}

document.querySelector('#delete_data').addEventListener('click', deleteData)