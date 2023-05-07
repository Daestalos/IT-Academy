
const catTitle = document.querySelector('#current-title'),
    catContent = document.querySelector('#current-content > p'),
    catImage = document.querySelector('#current-cat'),
    addCat = document.querySelector('.btn'),
    table = document.querySelector("#cat-info"),
    changeTheme = document.querySelector('#change-switcher'),
    changeThemeImg = document.querySelector('#switcher > img'),
    catBtn = document.querySelectorAll('.card-action > a');

catBtn.forEach(item => {
    item.addEventListener('click', (e) =>{
        const catNumber = e.target.innerText;
        catImage.src = `./images/${catNumber.toLowerCase()}.jpg`
        catTitle.innerText = catNumber[0] + catNumber.slice(1).toLowerCase()
        catContent.innerText = `I am a beautiful cat №${catNumber.slice(-1)}`
    })
})

addCat.addEventListener('click', () => {
    const row = table.insertRow(-1),
          cell1 = row.insertCell(0),
          cell2 = row.insertCell(1),
          cell3 = row.insertCell(2);

    let name = prompt('Введите имя'),
        country = prompt('Введите страну'),
        birth = prompt('Введите год рождения');

    cell1.innerText = name
    cell2.innerText = country
    cell3.innerText = birth
    
})

changeTheme.addEventListener('click', () =>{
    if (changeTheme.alt == 'sun'){
        changeTheme.alt = 'moon'
        changeThemeImg.src = `./images/moon.svg`
        changeThemeImg.style.background = 'white'
        document.body.style.background = 'black'
        document.body.style.color = 'white'
    } else {
        changeTheme.alt = 'sun'
        changeThemeImg.src = `./images/sun.svg`
        document.body.style.color = 'black'
        document.body.style.background = "white"
    } 
})

