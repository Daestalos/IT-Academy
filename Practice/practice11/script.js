//  <!--------------Task1-------------->

function ChangeColorLinks(){
    const links = document.querySelectorAll('.breadcrumb_links')

    links.forEach(item => {
       // item.style.color = 'red'
       item.classList.toggle('new-color')
    })

}

// <!--------------Task2-------------->

const image = document.querySelector('#current-img-change')

function ChangeImage(){
    image.src = 'images/photo2.jpg'
}

function InitialImage(){
    image.src = 'images/photo1.jpg'
}

//  <!--------------Task3-------------->

const cardTitle = document.querySelector('#card2-title')

function ChangeTitle(){
    cardTitle.innerText = 'New Title'
}

//  <!--------------Task4-------------->

const listLinks = document.querySelector('#list-links')

function addNewLink(){
    listLinks.innerHTML += '<a href="#!" class="breadcrumb">New element</a>'
}

//  <!--------------Task5-------------->

const collectionList = document.querySelector('#collection-list')

function addNewItem(){
    let child = collectionList.lastElementChild.innerText.split(' ')
    collectionList.innerHTML += `<a href="#!" class="collection-item">Item ${++child[1]}</a>`
}