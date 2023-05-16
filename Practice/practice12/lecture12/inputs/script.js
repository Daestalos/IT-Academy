function getForm(){
    // console.log(document.forms); - доступ ко всем формам на странице (получаем HTML-коллекцию)
    console.log(document.forms[0]); // <form name="userForm">...</form>
    console.log(document.forms.userForm); // <form name="userForm">...</form>
    console.log(document.forms[0].elements.firstName); // <input type="text" placeholder="Name" name="firstName"></input>
    console.log(document.forms[0].elements.firstName.value); // = 123 (выводит то, что введем)
}

function setLastName(){
    let input2 = document.forms[0].elements.lastName;
    input2.value = 'Bobson';
}

function getCurrentSelected(){
    // находим выпадающий список
    let selectElem = document.forms[0].elements.currentOption; 
    console.log(selectElem.value);  // // = 1 (выбираем элемент на странице и получаем его значение)
    // получаем текст опции
    console.log(selectElem.options[selectElem.selectedIndex].text); // = Option 1
    // получаем индекс опции
    console.log(selectElem.selectedIndex); // 1
}

function setCurrentSelected(){
    let selectElem = document.forms[0].elements.currentOption; 
    selectElem.value = '3' // устанавливается option 3
}

function getCheckbox(){
    // находим по имени чекбокс
    let checkboxElem = document.forms[0].elements.inputColors;

    console.log(checkboxElem); // RadioNodeList(5) [input, input, input, input, input, value: '']
}

function setCheckBox(){
    // находим по имени чекбокс
    let checkboxElem = document.forms[0].elements.inputColors;
    // устанавливаем true 4 чекбоксу
    checkboxElem[3].checked = true;
    
}

function setFocusElement(){
    let activeElem = document.forms[0].elements.userAge
    // делаем фокус на элемент
    activeElem.focus();
    // убрать фокус
   setTimeout(() => {
    activeElem.blur();
   }, 3000)
   // проскролить до элемента
   activeElem.scrollIntoView();
}

function submitData(e){
    e.preventDefault();

    let form = document.forms[0]
    form.submit();
}

function resetData(){
    let form = document.forms[0]
    // очищаем все поля формы (возвращаем на первоначальное значение)
    form.reset();
}