// Task 8. При клике на кнопку "open info" (любого номера) откройте модальное окно. Чтобы его открыть добавьте к элементу "div id="modal1"" класс под названием "modal_open". Когда модальное окно будет открыто, вам необходимо при нажатии кнопку "ESC" закрыть его. Также в файле script_add.js вы найдете массив с данными, которые должны записываться в модальное окно. Например при клике на кнопку "open info 2", в массиве выбираете второй элемент, у которого есть id="2", title="Modal Header 2", description="A bunch of text №2"

var listModal = [   
    {
        title: 'Modal Header 1',
        description: 'A bunch of text №1',
        id: 1
    },
    {
        title: 'Modal Header 2',
        description: 'A bunch of text №2',
        id: 2
    },
    {
        title: 'Modal Header 3',
        description: 'A bunch of text №3333',
        id: 3
    }, 
    {
        title: 'Modal Header 4',
        description: 'A bunch of text №4444444',
        id: 4
    },
    {
        title: 'Modal Header 5',
        description: 'A bunch of text №555555555',
        id: 5
    },
    {
        title: 'Modal Header 6',
        description: 'A bunch of text №666666666',
        id: 6
    },
    {
        title: 'Modal Header 7',
        description: 'A bunch of text №007',
        id: 7
    },
    {
        title: 'Modal Header 8',
        description: 'A bunch of text №888',
        id: 8
    },
    {
        title: 'Modal Header 9',
        description: 'A bunch of text №9',
        id: 9
    },
    {
        title: 'Modal Header 10',
        description: 'A bunch of text №10',
        id: 10
    }
]






// Task9

var list = [
    {
        name: 'Link1',
        ref: '#link1' 
    },
    {
        name: 'Link2',
        ref: '#link2' 
    },
    {
        name: 'Link3',
        ref: '#link3', 
        subMenu: [
            {
                name: 'Link3.1',
                ref: 'link31'
            },
            {
                name: 'Link3.2',
                ref: 'link32'
            },
        ]
    },
    {
        name: 'Link4',
        ref: '#link4' 
    },
    {
        name: 'Link5',
        ref: '#link5',
        subMenu: [
            {
                name: 'Link5.1',
                ref: 'link51'
            },
            {
                name: 'Link5.2',
                ref: 'link52'
            },
        ]
    },

]

let modalBtns = document.querySelector('#modal-box'),
    modalWindow = document.querySelector('#modal1');

function generateModal(currentId){
    let modalData = listModal.find(item => item.id === +currentId),
        modalTitle = modalWindow.querySelector('h4'),
        modalDesc = modalWindow.querySelector('p');

    modalTitle.innerText = modalData.title;
    modalDesc.innerText = modalData.description
}

modalBtns.addEventListener('click', (e) => {
    let currentBtn = e.target,
        currentIdBtn = e.target.dataset.numb;
    
    if (currentBtn.dataset.numb){
        generateModal(currentIdBtn)
        modalWindow.classList.add('modal_open');
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalWindow.classList.contains('modal_open')) {
        modalWindow.classList.remove('modal_open');
    }
})