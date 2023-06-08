
// ### Display none preloader after 500 ms

const preloader = document.querySelector('#preloader'),
      mainContant = document.querySelector('.content');

function closePreloader(){
        preloader.style.opacity = '0'
        mainContant.style.opacity = '1'
}

setTimeout(closePreloader, 500);
