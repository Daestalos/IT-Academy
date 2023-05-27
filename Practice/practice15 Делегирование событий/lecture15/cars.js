let cars = document.querySelector('#cars');

// Делегирование событий

cars.addEventListener('click', (e) => {
    // метод closest - позволяет относительно элемента, на которое вызвано событие найти родительский элемент, который был указан
    console.log(e.target.closest('li'));

    let preActiveCar = document.querySelector('.active-car');

    if(e.target.closest('li')){
        preActiveCar.classList.remove('active-car')
        e.target.closest('li').classList.add('active-car')
    }
})



