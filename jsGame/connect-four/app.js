document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')

    let currentPlayer = 1

    for(var i = 0, len = squares.length; i < len; i++)

    (function(index) {
        // add on click to each square in your grid
        squares[i].onclick = function() {
            //if the square below your current square is taken, you can go on top of interval
            if(squares[index + 7].classList.contains('taken')) {
                if(currentPlayer === 1) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    //change the player
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                else if(currentPlayer === 2) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    //change the player
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                //if the square below your current square is not taken, you can't go here
            }
            else {
                alert('cant go here')
            }
        }
    }) (i) 

//check the board for win or lose

function checkBoard()
{
    //make const that shows all winning arrays
    const winningArrays = [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
        [20, 19, 18, 17],[28, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
        [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
        [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
        [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
        [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
        [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
    ]
    //now lets take 4 values in each winningArrays and plug them into the squares
    for(let y = 0; y < winningArrays.length; y++)
    {
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]
        
        //now check those arrays to see if they have the class of player one
        if(square1.classList.contains('player-one') &&
          square2.classList.contains('player-one') &&
          square3.classList.contains('player-one') &&
          square4.classList.contains('player-one') )
          {
            //if these are true, player-one is passed as winner
            result.innerHTML = 'Player one is winner'
          }
        else if(square1.classList.contains('player-two') &&
          square2.classList.contains('player-two') &&
          square3.classList.contains('player-two') &&
          square4.classList.contains('player-two') )
          {
            //if these are true, player-one is passed as winner
            result.innerHTML = 'Player two is winner'
          }

    }
}

// add  an eventListener to each square  that will trigger the checkboard function on click

squares.forEach(square => square.addEventListener('click', checkBoard))






})