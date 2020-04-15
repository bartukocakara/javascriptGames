document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const width = 9
    let currentIndex = 76

    //render frog on starting block

    squares[currentIndex].classList.add('frog')
})