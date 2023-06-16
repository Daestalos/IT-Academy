//https://dog.ceo/dog-api/   

// https://dog.ceo/api/breeds/image/random

// N.21 Домашнее задание INFINITY_DOGS_TAPE
// Используйте для работы с проектом API https://dog.ceo/api/breeds/image/random, на всякий случай документация(https://dog.ceo/dog-api/). 
// Вам необходимо при открытии страницы отобразить 3 карточки с собаками в виде ленты(т.е. сразу же осуществить запрос на свервер для получения 3 картинок). Когда вы будете скроллить ниже, перед тем как будет видна последняя карточка, совершайте еще запрос на сервер, чтобы появлялись еще новые карточки. (т.к. API всегда по одной и той же ссылке выдает случайные данные, ваша лента с собаками будет уникальна).


const dogList = document.querySelector('#dogs')
dogList.innerText = ''

const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        dogList.innerHTML += `
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <img src="${data.message}" alt="dog">  
                <span class="card-title">Good boy or good girl!</span>
            </div>
        </div>
        `
    })
}

for (let i = 0; i < 3; i++){
    getDog()
}


window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight;
    let scroll = this.scrollY;
console.log(scroll);
    if (parseInt(windowHeight) - 300 <= parseInt(scroll)){
        getDog()
    }
});