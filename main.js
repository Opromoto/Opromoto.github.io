let cards = []
let sum =0;
let card;
let messages = ''
let isAlive = false
let hasBlackJack =false
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let messageEl = document.getElementById('message-el')
let playerEl = document.getElementById('player-el')

let player = {
  name: 'Promise', 
  chips: 200
}

playerEl.textContent = player.name + ': $' + player.chips

function randomCard(){
  let randomNumber = Math.floor(Math.random()*10) +1
  if (randomNumber===1) {
    return 11
  } else {
     return randomNumber;
      }
}     


function renderGame() {


cardEl.textContent = 'Cards: '

if (sum<21) {
  messages = 'Do you want to draw a new card?🤖 '
} else if(sum === 21){
  messages = 'Wohooo you\'ve got blackjack! 🤑🤑'
} else {
  messages = 'you\'re out of the game😭😭'
}
 messageEl.textContent = messages
 sumEl.textContent = 'Sum: ' +  sum
  
 for (var i = 0; i < cards.length; i++) {
   cardEl.textContent +=cards[i] + ' '
 }
 

}


function startGame() {
  
let firstCard = randomCard()
let secondCard = randomCard()
cards= [firstCard, secondCard] 
  
sum = cards[0] + cards[1]  
 
 
   renderGame()

}


function newCard() {
  if (sum === 21) {
    document.getElementById('error').textContent = 'Take your cash 🤑'
  } else if (sum > 21) {
   document.getElementById('error').textContent = 'You\'re out of the game '
  } else if (sum === 0) {
      document.getElementById('error').textContent = 'You haven\'t clicked on START GAME '
  } else  {
  let thirdCard = randomCard()
  cards.push(thirdCard)
  
  sum += thirdCard


  console.log(cards)
  
   
 /*for (var i = 0; i < cards.length; i++) {
   cardEl.textContent += cards[i] + '  '
 }*/
   renderGame()
 }
 
}

