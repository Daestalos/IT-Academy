function drag(e){
    e.dataTransfer.setData('text', '#drag1')
}

function allowDrop(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();

    let img = document.querySelector('#drag1');
    // отвечает за принимающий элемент
    e.target.append(img)

}