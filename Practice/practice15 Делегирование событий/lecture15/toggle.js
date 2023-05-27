
// Делегирование событий - дата-атрибус с значением

document.addEventListener('click', (e) => {
    let toggleId = e.target.dataset.toggleId;
    
    if (!toggleId) {
        return;
    }

    let currentElement = document.getElementById(toggleId);
    currentElement.hidden = !currentElement.hidden;
})