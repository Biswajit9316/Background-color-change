const button = document.querySelector('#btn')
const body = document.querySelector('body')

let color = ['violet', 'aqua', 'orange', 'pink']

button.addEventListener('click', genrateColor)


function genrateColor() {
    let randomnumber = getRandomNumber();
    body.style.backgroundColor = color[randomnumber];
    
}

function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}