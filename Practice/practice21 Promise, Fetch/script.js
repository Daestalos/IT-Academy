
// https://jsonplaceholder.typicode.com/posts

const getAllPosts = (count = 5) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${count}`)
    .then((res) => {
        return res.json()
    })
    .then((data)=> {
        // console.log(data[31].title);
        const posts = document.querySelector('#posts')
        posts.innerHTML = '';
        
        data.forEach(post => {
            posts.innerHTML += `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${post.title}</span>
                    <p>${post.body}</p>
                </div>
            </div>
            `
        });

    })
}


const getPost = (count = 7) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    .then((res) => {
        return res.json()
    })
    .then((data)=> {
        // console.log(data[31].title);
        const posts = document.querySelector('#posts')
        posts.innerHTML = '';
        

        posts.innerHTML += `
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${data.title}</span>
                <p>${data.body}</p>
            </div>
        </div>
        `


    })
}


document.querySelector('#five-bews').addEventListener('click', () => {
    getAllPosts(5);
});

document.querySelector('#ten-news').addEventListener('click', () => {
    getAllPosts(10);
});

document.querySelector('#third-news').addEventListener('click', () => {
    getPost(3);
});
