const board = document.querySelector('#board')
const colors = ['#FF2B2B', '#9F2B68', '#b0e0e6', ' #34c924', ' #6d3f5b','#FF6800','#8a7f8e','#C0448F','#59351F','#009B76']
const SQUARES_NUMBER = random(100, 800)

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    //square.addEventListener('pointerover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    //square.addEventListener('pointerleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) { 
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) { 
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(element) { 
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

