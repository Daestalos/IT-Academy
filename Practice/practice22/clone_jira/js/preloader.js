const preloader = document.querySelector('#preloader');
const mainContent = document.querySelector('.content');

function closePreloader(){
    preloader.style.opacity = 0;
    mainContent.style.opacity = 1;
}

setTimeout(closePreloader, 500);

