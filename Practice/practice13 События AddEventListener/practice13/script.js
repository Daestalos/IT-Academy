// ###  Task 3. При наведении на синий блок, измените его фон на красный. 

const block = document.querySelector('.blue_block');

block.addEventListener('mousemove', () => block.style.backgroundColor = 'red')

// ### Task 4. При нажатии на картинку-лайк, измените счетчик с 0 до 1.

const likeBtn = document.querySelector('#like-btn'),
likeCounter = document.querySelector('#like-counter');

likeBtn.addEventListener('dblclick', () => {
    likeCounter.innerText = 1;
})

// ###  Task 5. При нажатии на кнопку клавишу enter добавьте содержимое инпута в таблицу.

let table = document.querySelector('#name_list'),
    inputEnter = document.querySelector('#first_name2');

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputEnter.value != '') {
        // var row = table.insertRow(0);
        // var cell = row.insertCell(0);
        // cell.innerHTML = inputEnter.value;
        table.innerHTML += `<tr><td>${inputEnter.value}</td></tr>`
        inputEnter.value = '';
    }
})

// ### Task 6. При нажатии на кнопку "open info" откройте модальное окно, чтобы его открыть добавьте к элементу "div id="modal1"" класс под названием "modal_open". Когда модальное окно будет открыто, вам необходимо при нажатии на клавишу "Esc" скрыть модальное окно.

const openModalBtn = document.querySelector('#open-modal'),
      modal = document.querySelector('#modal1')

openModalBtn.addEventListener('click', () => modal.classList.add('modal_open'))

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('modal_open')
    }
})

// ### Task 7. При регистрации введите логин. После ввода логина нажмите enter. Он обязательно должен состоять не менее чем из 4 символов.

let errorMessage = document.querySelectorAll('.error-message')[1],
    inputReg = document.querySelectorAll('#first_login')[0];

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputReg.value.length >= 4){
        errorMessage.classList.add("error-hide");
    }
})


inputReg.addEventListener('input', () => {
    if (inputReg.value.length <= 3){
        errorMessage.classList.remove("error-hide");
    }
})

// ### Task 8. При регистрации введите логин. После ввода логина нажмите enter. Обязательно первый символ должен быть заглавным.

let inputLog = document.querySelectorAll('#first_login')[1],
    errorMessage2 = document.querySelector('.error-message2');

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputLog.value[0] === inputLog.value[0].toUpperCase()){
        errorMessage2.classList.add("error-hide");
    }
})

inputLog.addEventListener('input', () => {
    if (inputLog.value[0] !== inputLog.value[0].toUpperCase()){
        errorMessage2.classList.remove("error-hide");
    }
})

// ### Task 9. Посчитайте суточную норму потребления воды для человека. Каждый 1кг веса равен 30мл воды. Выведите информацию под кнопкой "Calculate Water".

let finalCalculate = document.querySelector('#final-calculate'),
    first_kg = document.querySelector('#first_kg');
const calculateWater = document.querySelector('#calculate-water');
 
calculateWater.addEventListener('click', () => {
    finalCalculate.innerText = `${first_kg.value * 30} мл`
})

// ## Task 10. Посчитайте зарплату для вашего работника. В первом input введите количество дней отработанных, во втором выберите его ставку в час. Рабочий день составляет 8 часов.

let inputDays = document.querySelector('#first_days'),
    selectSalaryHour = document.querySelector('select'),
    finalSalary1 = document.querySelector('#final-salary')

const calculateSalary = document.querySelector('#calculate-salary')

calculateSalary.addEventListener('click', () =>{
    finalSalary1.innerText = `${(inputDays.value * 8) * selectSalaryHour.value} $`
})

// ## Task 11. При регистрации введите логин. После ввода логина нажмите enter. Обязательно первый символ должен быть заглавным. Длина логина должна состоять не менее чем из 5 символов.

let firstLogin = document.querySelectorAll('#first_login')[2]
const errorMessage3 = document.querySelector('.error-message3'),
errorMessage4 = document.querySelector('.error-message4');

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && firstLogin.value[0] === firstLogin.value[0].toUpperCase() ){
        errorMessage3.classList.add("error-hide");
    }
    if (e.key === 'Enter' && firstLogin.value.length >= 5){
        errorMessage4.classList.add("error-hide");
    }
})

firstLogin.addEventListener('input', () => {
    if (firstLogin.value[0] !== firstLogin.value[0].toUpperCase() ){
        errorMessage3.classList.remove("error-hide");
    }
    if (firstLogin.value.length <= 4){
        errorMessage4.classList.remove("error-hide");
    }
})