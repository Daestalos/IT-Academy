
let container = document.querySelector('.container1');

function changeBackground() {
    container.classList.add('add-bg');
}

// container.onclick = changeBackground;
// container.onmouseover = changeBackground;
// container.onmouseleave = changeBackground;
// container.oncontextmenu = changeBackground;

container.addEventListener('click', changeBackground);
