console.log("linked")


var cardSuits = ['C','D','H','S']
var cardNumbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
var cardValue = []
var cardImg = ["2_of_clubs","2_of_diamonds","2_of_hearts","2_of_spades","3_of_clubs","3_of_diamonds","3_of_hearts","3_of_spades","4_of_clubs","4_of_diamonds","4_of_hearts","4_of_spades","5_of_clubs","5_of_diamonds","5_of_hearts","5_of_spades","6_of_clubs","6_of_diamonds","6_of_hearts","6_of_spades","7_of_clubs","7_of_diamonds","7_of_hearts","7_of_spades","8_of_clubs","8_of_diamonds","8_of_hearts","8_of_spades","9_of_clubs","9_of_diamonds","9_of_hearts","9_of_spades","10_of_clubs","10_of_diamonds","10_of_hearts","10_of_spades","jack_of_clubs2","jack_of_diamonds2","jack_of_hearts2","jack_of_spades2","queen_of_clubs2","queen_of_diamonds2","queen_of_hearts2","queen_of_spades2","king_of_clubs2","king_of_diamonds2","king_of_hearts2","king_of_spades2","ace_of_clubs","ace_of_diamonds","ace_of_hearts","ace_of_spades2"]


var Card = function Card(cardSuits,cardNumbers,cardImg){
this.cardSuits = cardSuits;
this.cardNumbers = cardNumbers;
this.cardValue = cardValue;
this.cardImg = cardImg;
}


var deckImg = []
var assignCardImages = function(){
	for (i=0;i<cardImg.length; i++)
		deckImg.push(new Card("playing_cards/"+cardImg[i]))
//"playing_cards/"+
}

//deck.push(cardImg(deckImg))
assignCardImages()

var deck = []
	var createCards = function(){

		for (i=0; i < cardSuits.length; i++) {
			for (o=0;o<cardNumbers.length;o++){	
				deck.push(new Card(cardSuits[i],cardNumbers[o]))
			}
		}
		// for (u=0;u<deckImg.length;u++){
		// 	deck.push(new Card(deckImg[u]))	
		//}
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


var playerHand = []
var dealerHand = []

var dealCards = function(){
			for (i=0; i<2; i++){
			playerHand.push(this.shuffleDeck[i])
				shuffleDeck.shift()
			dealerHand.push(this.shuffleDeck[i])
				shuffleDeck.shift()
		}
		// console.log(playerHand)
		// console.log(dealerHand)
		// console.log(shuffleDeck)
	}
dealCards()


var Game = function(){
	this.render = function(element,playerHand,dealerHand){
		$('.card-deck').append('<img class="card-stack" src="https://s3.amazonaws.com/ksr/assets/000/246/302/979a46ed6000168e916a6ef1230c9afb_large.jpg">')
		$p = $('<p class="player-hand">').text(element.playerHand())
		$d = $('<p class="dealer-hand">').text(element.dealerHand())
			$('.dealer-hand').append($d)//('<img class="dealerCards" src=""')
			$('.player-hand').append($p)//('<img class="playCards" src=""')

	}

}

var game = new Game(shuffleDeck,dealCards,dealerHand,playerHand)
game.render()









