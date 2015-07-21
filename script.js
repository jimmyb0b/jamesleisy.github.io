console.log("linked")


var cardSuit = ['C','D','H','S']
var cardNumber = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
var cardImg = ["2_of_clubs","2_of_diamonds","2_of_hearts","2_of_spades","3_of_clubs","3_of_diamonds","3_of_hearts","3_of_spades","4_of_clubs","4_of_diamonds","4_of_hearts","4_of_spades","5_of_clubs","5_of_diamonds","5_of_hearts","5_of_spades","6_of_clubs","6_of_diamonds","6_of_hearts","6_of_spades","7_of_clubs","7_of_diamonds","7_of_hearts","7_of_spades","8_of_clubs","8_of_diamonds","8_of_hearts","8_of_spades","9_of_clubs","9_of_diamonds","9_of_hearts","9_of_spades","10_of_clubs","10_of_diamonds","10_of_hearts","10_of_spades","jack_of_clubs2","jack_of_diamonds2","jack_of_hearts2","jack_of_spades2","queen_of_clubs2","queen_of_diamonds2","queen_of_hearts2","queen_of_spades2","king_of_clubs2","king_of_diamonds2","king_of_hearts2","king_of_spades2","ace_of_clubs","ace_of_diamonds","ace_of_hearts","ace_of_spades2"]
var cardValue = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,]


var Card = function Card(cardSuit,cardNumber,cardImg,cardValue){
this.cardSuit = cardSuit;
this.cardNumber = cardNumber;
this.cardImg = cardImg;
this.cardValue = cardValue;
}

var deck = []
var shuffleDeck = []
var money = 1000
var betValue = 0
var playerHand = []
var dealerHand = []

$('.hit-button').prop('disabled', true)
$('.stay-button').prop('disabled', true)


$('.bet-value').text("Your bet is $"+ betValue)
$('.bank').text("You have $"+money)


var createCards = function(){
		for (var i=0; i < cardSuit.length; i++) {
			for (var o=0; o< cardNumber.length;o++){	
				deck.push(new Card(cardSuit[i],cardNumber[o],('playing_cards/'+cardImg[i+4*o]+'.png'),(cardValue[i+4*o])))
				}
			}
		}
createCards()


var randomizedDeck = function(){
	for (var i=0; i<deck.length; i++){
			shuffling = Math.floor(Math.random()* this.deck.length)
			shuffleDeck.push(deck[shuffling])
		}		
	}
 randomizedDeck()

	$('.increase-bet').on('click', function(){
		if (money> 0){
			betValue += 10
			money -= 10
		$('.bank').text("You have $"+money)		
		$('.bet-value').text("Your bet is $"+ betValue)
		}
	})
	
	$('.decrease-bet').on('click', function(){			
		if (betValue > 0){
			betValue -= 10
			money += 10
		$('.bank').text("You have $"+money)		
		$('.bet-value').text("Your bet is $"+ betValue)
		}
	})


	$('.card-deck').append('<img class="card-stack" src="http://patentimages.storage.googleapis.com/USD490860S1/USD0490860-20040601-D00000.png">')


var dealCards = function(){
	$('.deal-cards').on('click',function(){
		if (betValue > 0){
			$('.hit-button').prop('disabled', false)
			$('.stay-button').prop('disabled', false)
			$('.increase-bet').prop('disabled', true)
			$('.decrease-bet').prop('disabled', true)

			playerHand.push(shuffleDeck[0])
				shuffleDeck.shift()
			dealerHand.push(shuffleDeck[0])
				shuffleDeck.shift()
			playerHand.push(shuffleDeck[0])
				shuffleDeck.shift()
			dealerHand.push(shuffleDeck[0])
				shuffleDeck.shift()

			$('.deal-cards').prop('disabled', true)
			$('.increase-bet').prop('disabled', true)
//player score count
		$p = $('<p>').text("You have: "+playerScore())
		$('.player-score').append($p)
//dealer score count
		$d = $('<p>').text("Dealer has: "+dealerScore())
		$('.dealer-score').append($d)

		if (playerScore === 21 && dealerScore === 21){
			console.log('Push')
		}else if (playerScore === 21){
			console.log('Player Wins')
		}else if (dealerScore === 21){
			console.log('Dealer Wins')
		}
	
		for (i=0; i<playerHand.length;i++){
			$p = $('<img class="player-cards">').attr('src',playerHand[i].cardImg)
			$('.player-hand').append($p)
		}

		for (i=0; i<dealerHand.length;i++){
			$d = $('<img class="dealer-cards">').attr('src',dealerHand[i].cardImg)
			$('.dealer-hand').append($d)
		}
			// console.log('player hand',playerHand)
			// console.log('dealer hand',dealerHand)
		}else{
			alert("You need to make a bet first")
		}
	})
}

dealCards()


var playAgain = function(){
	  playerHand = []
		dealerHand = []
		$('.dealer-hand').empty()
		$('.player-hand').empty()
		$('.dealer-score').empty()
		$('.player-score').empty()
		$('.modal').addClass('hidden')
		$('.hit-button').prop('disabled', true)
		$('.stay-button').prop('disabled', true)
		$('.increase-bet').prop('disabled', false)
		$('.decrease-bet').prop('disabled', false)
		$('.deal-cards').prop('disabled', false)
		money-=betValue
		$('.bank').text("You have $"+money)
}
$('#close').on('click',function(){
	playAgain()
})

var playerWin = function(){
	money += betValue*2
	$('.bank').text("You have $"+money)
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Player Wins')
}

var playerBust = function(){
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Player Busted, Dealer Wins')
	console.log('busted')
	$('.hit-button').prop('disabled', true)
}

var dealerWins = function(){
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Dealer Wins')
}

var dealerBusts = function(){
	money += betValue*2
	$('.bank').text("You have $"+money)
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Dealer Busted, Player Wins')
	console.log('busted')
	$('.hit-button').prop('disabled', true)
}

var playerBlackjack = function(){
	money += betValue *2.5
	$('.bank').text("You have $"+money)
	//reset game
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Player got BlackJack')
}

var dealerBlackjack = function(){
	//reset game
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Dealer got BlackJack')
}

var gamePush = function(){
	money+=betValue
	$('.bank').text("You have $"+money)
	$('.modal').removeClass('hidden')
	$('.winner-message').text('Push, try again')
}



var playerScore = function(){
	var pscore = 0
	for (var i=0; i< playerHand.length;i++){
		pscore+=(parseInt(playerHand[i].cardValue))
		}
		for (var i=0; i<playerHand.length;i++){
			if (playerHand[i].cardNumber === 'A' && pscore >= 21){
				pscore -= 10
			}
	}

 	console.log('player score', pscore)
	return pscore
}
playerScore()


var dealerScore = function(){
	var dscore = 0
	for (var i=0; i< dealerHand.length;i++){
		dscore+=(parseInt(dealerHand[i].cardValue))
			}
		for (var i=0; i<dealerHand.length;i++){
			if (dealerHand[i].cardNumber === 'A' && dscore >= 21){
				score-= 10
	}
}
	console.log('dealer score', dscore)
	return dscore
}
dealerScore()

var winner = function(){
	 if (playerScore() > dealerScore() && playerScore() <= 21){
		console.log('player wins')
			playerWin()
	}else if (playerScore() === dealerScore()){
		console.log('push')
			gamePush()
	}else if (dealerScore () > playerScore() && dealerScore() <=21){
		console.log('dealer wins')
			dealerWins()
	}
}



var playerHit = function(){	
	$('.hit-button').each(function(){
		$(this).on('click',function(){
		playerHand.push(shuffleDeck[0])
			$p = $('<img class="player-cards">').attr('src',shuffleDeck[0].cardImg)
			$('.player-hand').append($p)
			shuffleDeck.shift()

			$('.player-score').text("You have: "+ playerScore())
	
			if (playerScore() > 21){
			 	playerBust()
			}else if (playerScore () === 21){
				playerBlackjack()
			}
		})
	})
}

playerHit()


$('.stay-button').on('click', function(){
	while (dealerScore() <=16){
			dealerHand.push(shuffleDeck[0])
			$d = $('<img class="dealer-cards">').attr('src',shuffleDeck[0].cardImg)
			$('.dealer-hand').append($d)
			shuffleDeck.shift()

			$('.dealer-score').text("Dealer has: "+ dealerScore())
		}
				if( dealerScore() === 21){
					dealerBlackjack()
				}else if (dealerScore() >16 && dealerScore() <=21){
					winner()
				}else if(dealerScore() > 21){
					console.log( "Dealer Bust")
					dealerBusts()
				}					
		})








