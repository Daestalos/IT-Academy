
// document.querySelector('.content').style.color = 'red'

const content = document.querySelector('.content')
content.style.color = 'red'

const spans = document.querySelectorAll('span')
console.log(spans);

spans.forEach( (item) => {
    item.style.fontWeight = 'bold'
})

