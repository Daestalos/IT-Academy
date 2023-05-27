// Второй подход делегирования - дата-атрибуты

// Если элементы имеют один и тот же функционал - можно добавить для них data-атрибут, который будет иметь одно и тоже название

document.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    if (e.target.dataset.counter12 !== undefined){
        ++e.target.value 
    }
})