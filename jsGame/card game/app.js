document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name : 'foto1',
            img : 'images/foto1.png'
        },
        {
            name : 'foto2',
            img : 'images/foto2.png'
        },
        {
            name : 'foto3',
            img : 'images/foto3.png'
        },
        {
            name : 'foto4',
            img : 'images/foto4.png'
        },
        {
            name : 'foto1',
            img : 'images/foto1.png'
        },
        {
            name : 'foto2',
            img : 'images/foto2.png'
        },
        {
            name : 'foto3',
            img : 'images/foto3.png'
        },
        {
            name : 'foto4',
            img : 'images/foto4.png'
        },
    ];
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChoosen = []
    var cardsChoosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++)
        {
            var card = document.createElement('img') //<img>
            card.setAttribute('src', 'images/foto6.png')
            card.setAttribute('data-id', i)
            card.setAttribute('class', 'unmatched')
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
//check for matches
function checkForMatch()
{
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
    if( cardsChoosen[0] === cardsChoosen[1])
    {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/foto8.png')
        cards[optionTwoId].setAttribute('src', 'images/foto8.png')
        cards[optionOneId].setAttribute('class', 'matched')
        cards[optionTwoId].setAttribute('class', 'matched')
        cardsWon.push(cardsChoosen)
    }
    else
    {
        cards[optionOneId].setAttribute('src', 'images/foto6.png')
        cards[optionTwoId].setAttribute('src', 'images/foto6.png')
        cardsChoosen.disabled = true
        alert('sorry try again')
    }
    cardsChoosen = []
    cardsChoosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2)
    {
        resultDisplay.textContent = 'Congrulations you won'
    }
}

//flip your card

function flipCard()
{
    var cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name) // cardsChoosen = [cardsArray[cardId]]
    cardsChoosenId.push(cardId)           // cardschoosenId = [cardId]
    this.setAttribute('src', cardArray[cardId].img)
        if (cardsChoosen.length === 2 )
        {
            setTimeout(checkForMatch, 50)
        }
}   


createBoard()


});