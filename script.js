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
	var createCards = function(){

			for (i=0; i < cardSuit.length; i++) {
				for (o=0; o< cardNumber.length;o++){	
	//				for (u=0; u<this.cardImg.length;u++){
					deck.push(new Card(cardSuit[i],cardNumber[o],('playing_cards/'+cardImg[i+4*o]+'.png'),(cardValue[i+4*o])))
				}
			}
//			console.log(deck)
		}
createCards()


var shuffleDeck = []
	var randomizedDeck = function(){
		for (i=0; i<deck.length; i++){
				shuffling = Math.floor(Math.random()* this.deck.length)
				shuffleDeck.push(deck[shuffling])
			}		
//		console.log(shuffleDeck)
	}
 randomizedDeck()

var money = 1000

var account = function(money){
//	for (i=0;i<parseInt(money);i++){
 		$('.bank').text("You have $"+money)
//	}
}
account(money)

var betValue = 0
var bet = function(){
	$('.bet-value').text("Your bet is $"+ betValue)
	$('.increase-bet').on('click', function(){
			betValue += 10
			money -= 10
	})
	return betValue, money
}
bet()



	$('.card-deck').append('<img class="card-stack" src="http://patentimages.storage.googleapis.com/USD490860S1/USD0490860-20040601-D00000.png">')


var playerHand = []
var dealerHand = []

var dealCards = function(){
		$('.deal-cards').on('click',function(){
			for (i=0; i<1; i++){
			playerHand.push(shuffleDeck[i])
				shuffleDeck.shift()
			dealerHand.push(shuffleDeck[i])
				shuffleDeck.shift()
			playerHand.push(shuffleDeck[i])
				shuffleDeck.shift()
			dealerHand.push(shuffleDeck[i])
				shuffleDeck.shift()
			$('.deal-cards').prop('disabled', true)
			$('.increase-bet').prop('disabled', true)
//player score count
		$p = $('<p>').text("You have: "+playerScore())
		$('.player-score').append($p)
//dealer score count
		$d = $('<p>').text("The dealer has: "+dealerScore())
		$('.dealer-score').append($d)

		if (playerScore === 21 && dealerScore === 21){
			console.log('Push')
		}else if (playerScore === 21){
			console.log('Player Wins')
		}else if (dealerScore === 21){
			console.log('Dealer Wins')
		}
	}

	
		for (i=0; i<playerHand.length;i++){
			$p = $('<img class="player-cards">').attr('src',playerHand[i].cardImg)
			$('.player-hand').append($p)
		}
		for (i=0; i<dealerHand.length;i++){
			$d = $('<img class="dealer-cards">').attr('src',dealerHand[i].cardImg)
			$('.dealer-hand').append($d)
		}
			console.log('player hand',playerHand)
			console.log('dealer hand',dealerHand)

		// console.log(playerHand)
		// console.log(dealerHand)
		// console.log(shuffleDeck)
	})
}
dealCards()


var Game = function(){
	this.render = function(){
	
		// for (i=0; i<playerHand.length;i++){
		// 	$p = $('<img class="player-cards">').attr('src',playerHand[i].cardImg)
		// 	$('.player-hand').append($p)
		// }
		// for (i=0; i<dealerHand.length;i++){
		// 	$d = $('<img class="dealer-cards">').attr('src',dealerHand[i].cardImg)
		// 	$('.dealer-hand').append($d)
		// }
			console.log('player hand',playerHand)
			console.log('dealer hand',dealerHand)

	}
}

var game = new Game()
game.render()




var playerScore = function(){
	var score = 0
	for (i=0; i< playerHand.length;i++){
		score+=(parseInt(playerHand[i].cardValue))
		
		function hasValue(obj, key, value) {
    if (obj.hasOwnProperty('A') && playerScore > 21){
    	playerScore -= 10
    }
}	


// 		if (playerHand.prototype.contains(cardNumber["A"]) && score >21){
// 			playerHand[i].cardValue = 1
// 	}
 }
	console.log('player score', score)
	return score
}
playerScore()


var dealerScore = function(){
	var score = 0
	for (i=0; i< dealerHand.length;i++){
		score+=(parseInt(dealerHand[i].cardValue))
	// 	if (dealerHand.prototype.contains(cardNumber['A']) && score >21){
	// 		dealerHand[i].cardValue = 1
	// }
}
	console.log('dealer score', score)
	return score
}
dealerScore()

var winner = function(){
	if (playerScore ()> dealerScore()){
		console.log('player wins')
		$('#modal').modal('show')
		$('.winner-message').text("You won")
	}else if (playerScore ()=== dealerScore()){
		console.log('push')
	}else if (dealerScore ()> playerScore()){
		console.log('dealer wins')
	}
}
winner()


var playerHit = function(playerScore){
	

	$('.hit-button').each(function(){
		$(this).on('click',function(){
//	console.log('click')
		playerHand.push(shuffleDeck[0])
//			shuffleDeck[0] += playerScore() 
			shuffleDeck.shift()
			$p = $('<img class="player-cards">').attr('src',playerHand[i].cardImg)
			$('.player-hand').append($p)
			var score = dealerScore()
			for (i=0; i<playerHand.length;i++){
				if (playerScore(playerHand) > 21){
					return "Player Bust"

				}else {
					return playerScore
			}

//Ace = 11 or 1
		// function hasValue() {
  //   if (playerHand.obj.hasOwnProperty('A') && playerScore() > 21){
  //   	playerScore -= 10
//					playerScore += (parseInt(playerHand[i].cardValue)
		// }
  //   }
	}

	})
})
}
playerHit(playerScore)


var playerStay = function(){
	$('.stay-button').on('click', function(){
		//end player turn
	$('.hit-button').prop('disabled', true)

	})
}

var dealerPlay = function(dealerScore){
	$('.stay-button').on('click', function(){
		if (dealerScore() <=16){
			dealerHand.push(shuffleDeck[0])
			shuffleDeck.shift()
			$d = $('<img class="dealer-cards">').attr('src',dealerHand[i].cardImg)
			$('.dealer-hand').append($d)
		}else{
			for (i=0; i<playerHand.length;i++){
				if (playerScore(playerHand) > 21){
					return "Dealer Bust"
			return dealerScore
		}
	}
}
	})
}
dealerPlay(dealerScore)


// create modal


var playAgain = function(){

}


//bet not working
//functions pushing to html
	//new bet
	//player score
//Ace both 11 & 1
//Game resets after winner declared





