
function addNewItem(){
    let list = document.querySelector('#collection-list');

    // <a href="#!" class="collection-item">Item 2</a>

    let newItem = document.createElement('a');
    newItem.setAttribute('href', '#!');
    newItem.classList.add('collection-item');
    newItem.innerText = 'Item 10';

    list.insertAdjacentElement('beforeend', newItem)
    // аналог коду выше
    // list.insertAdjacentHTML('beforeend', '<a href="#!" class="collection-item">Item 2</a>')

}