let developerInput = document.querySelector('#Developer'),
    devText = document.querySelector('#devText');

developerInput.addEventListener('input', () => {
    if (developerInput.value === '' || developerInput.value.length <= 3){
        developerInput.style.border = '1px solid red';
        devText.style.color = 'red';
        devText.innerText = 'Поле заполнено неверно!';
    } else {
        developerInput.style.border = '1px solid green';
        devText.innerText = '';
    } 
})


let webNameInput = document.querySelector('#websiteName');
    webText = document.querySelector('#webText');

webNameInput.addEventListener('input', ()=>{
    if (webNameInput.value === '' || webNameInput.value[0] !== webNameInput.value[0].toLowerCase()){
        webNameInput.style.border = '1px solid red';
        webText.style.color = 'red'
        webText.innerText = 'Поле заполнено неверно!';
    } else {
        webNameInput.style.border = '1px solid green';
        webText.innerText = '';
    } 
})

let urlInput = document.querySelector('#Url'),
    urlText= document.querySelector('#urlText');


const urlReg = new RegExp("", "gm");;

urlInput.addEventListener('input', ()=>{
    if (urlInput.value === '' || !urlInput.value.match(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)){
        urlInput.style.border = '1px solid red';
        urlText.style.color = 'red';
        urlText.innerText = 'Поле заполнено неверно!';
    } else {
        urlInput.style.border = '1px solid green';
        urlText.innerText = '';
    } 
})

let dateInput = document.querySelector('#date'),
    dateText = document.querySelector('#dateText')

dateInput.addEventListener('input', () => {
    if (dateInput.value === '' || !dateInput.value.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)){
        dateInput.style.border = '1px solid red';
        dateText.style.color = 'red';
        dateText.innerText = 'Поле заполнено неверно!';
    } else {
        dateInput.style.border = '1px solid green';
        dateText.innerText = '';
    } 
})

let viewersInput = document.querySelector('#viewers'),
    viewersText = document.querySelector('#viewersText');

viewersInput.addEventListener('input', ()=>{
    console.log(viewersInput.value);
    if (viewersInput.value === '' || viewersInput.value <= 50){
        viewersInput.style.border = '1px solid red';
        viewersText.style.color = 'red';
        viewersText.innerText = 'Поле заполнено неверно!';
    } else {
        viewersInput.style.border = '1px solid green';
        viewersText.innerText = '';
    } 
})


let emailInput = document.querySelector('#email'),
    emailText = document.querySelector('#emailText');

emailInput.addEventListener('input', () => {
    if (emailInput.value === '' || !emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
        emailInput.style.border = '1px solid red';
        emailText.style.color = 'red';
        emailText.innerText = 'Поле заполнено неверно!';
    } else {
        emailInput.style.border = '1px solid green';
        emailText.innerText = '';
    } 
})

let selectInput = document.querySelector('#select'),
    selectText = document.querySelector('#selectText')

    selectInput.addEventListener('input', () => {
        console.log(selectInput.value);
    if (selectInput.value === ''){
        selectInput.style.border = '1px solid red';
        selectText.style.color = 'red';
        selectText.innerText = 'Поле заполнено неверно!';
    } else {
        selectInput.style.border = '1px solid green';
        selectText.innerText = '';
    } 
})    

let textAreaInput = document.querySelector('#textArea'),
    textAreaText = document.querySelector('#textAreaText'),
    radioText = document.querySelector('#radioText');

textAreaInput.addEventListener('input', () => {
    if (textAreaInput.value === '' || textAreaInput.value.split(' ').length <= 10){
        textAreaInput.style.border = '1px solid red';
        textAreaText.style.color = 'red';
        textAreaText.innerText = 'Поле заполнено неверно!';
    } else {
        textAreaInput.style.border = '1px solid green';
        textAreaText.innerText = '';
    } 
})



let form = document.querySelector('form'),
    submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', ()=>{
    form.classList.add('submitted');

    if (selectInput.value === ''){
        selectInput.style.border = '1px solid red';
    }

    if (textAreaInput.value === '') {
        textAreaInput.style.border = '1px solid red';
    }
});