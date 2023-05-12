const clubImage = document.querySelectorAll('.club-image > img'),
      linksItem = document.querySelectorAll('.links-item > a'),
      arrowRight = document.querySelector("#arrow-right"),
      arrowLeft = document.querySelector('#arrow-left'),
      card = document.querySelector('.card');

const arr = document.getElementById('arrow-right');
console.log(arr);




// Task 1. Даны картинки. Привяжите к каждой картинке событие, чтобы при клике, картинка увеличивалась в размерах в 1.5 раза.

clubImage.forEach(item => item.addEventListener('click', (e) => e.target.style.height = parseFloat(e.target.height) * 1.5 + 'px'))

// Task2. Привяжите всем кнопкам событие - при клике на любую из кнопок, открывается модальное окно prompt, где пользователь вводит новое название кнопки, и после подтверждения действия, кнопка меняет текст.

linksItem.forEach(item => item.addEventListener('click', (e) => {
    let askUser = prompt('Введите новое название кнопки')
    e.target.innerText = askUser
}))

// Task3. Реализуйте функцию, которая при клике на стрелочку вправо разместит данную карточку справа. Когда карточка будет размещена справа, при клике на стрелочку влево разместить картинку слева(в начальное местоположение).
console.log(arrowRight);
arrowRight.addEventListener('click', () => card.style.right = -200 + '%');
arrowLeft.addEventListener('click', () => card.style.right = 0);