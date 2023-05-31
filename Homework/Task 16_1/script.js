// Task 1. Для всех input необходимо реализовать так, чтобы они выводили свой
// value алертом при нажатии на любой из них, но только по первому нажатию.
// Повторное нажатие на input не должно вызывать реакции.

const inputsClick = document.querySelectorAll('[data-click]');

for (let item of inputsClick) {
    item.addEventListener('click', () => alert(item.value), {once: true})
}

// Task2. Привяжите всем input следующее событие - по потери фокуса каждый input
// выводит свое value в абзац с текстом "Вы ввели (такой-то текст)...".

const inputsFocus = document.querySelectorAll('[data-focus]');

[...inputsFocus].map(item => {
    item.addEventListener('focusout', (e) => {
        if (e.target.nextElementSibling !== null && e.target.nextElementSibling.tagName !== 'INPUT') {
            item.nextElementSibling.remove()
        }

        let newA = document.createElement('a')
        newA.innerText = item.value === ''
            ? `Вы ничего не ввели`
            : `Вы ввели: ${item.value}`
        item.after(newA)
    })
})

// Task3. Дана форма с id="sum-form". В ней даны инпуты, в них числа. Дана
// кнопка. По нажатию на эту кнопку получите форму по ее id, затем циклом
// переберите все инпуты в ней и найдите сумму чисел из этих input.

const sumbtn = document.querySelector('#sum-form button');

sumbtn.addEventListener('click', (e) => {
    e.preventDefault()

    let currentFormInputs = document.querySelectorAll('#sum-form input'),
        sum = [...currentFormInputs].reduce((acc, item) => acc + +item.value, 0);
   
    if (sumbtn.nextElementSibling !== null){ 
        sumbtn.nextElementSibling.innerText = ` Сумма: ${sum}`
    } else {
        let newA = document.createElement('a')
        newA.innerHTML = ` Сумма: ${sum}`
        sumbtn.after(newA)
    }

})


// Task4. Дан селект. Дан input. По изменению селекта выведите текст выбранного пункта в инпут.

let currentSelect = document.querySelector('select'),
    selectInput = document.querySelector('[data-select]')

currentSelect.addEventListener('change', () => selectInput.value = currentSelect.options[currentSelect.value-1].innerText.trim())