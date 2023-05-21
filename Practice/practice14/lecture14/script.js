let title = document.querySelector('h2');

title.addEventListener('dblclick', (e) => {
    console.log('Event', e.type);
    console.log("Target", e.target);
    console.log('Tag name', e.target.tagName);
    console.log('Class name', e.target.className);
    console.log('Add class name', e.target.classList.add('title'));
    console.log('Delete element', e.target.remove());
})