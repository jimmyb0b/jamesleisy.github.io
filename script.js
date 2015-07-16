console.log("linked")


var cardSuits = ['C','D','H','S']
var cardNumbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
//var cardLocation = []
var cardImg = []

// var assigningCountValue = function(){	
// 	for (i=0; i<52; i++){
// 		cardLocation.push(i)
// 	}
//	console.log(cardLocation)
//}
// assigningLocationValue()

var Card = function Card(cardSuits,cardNumbers){
this.cardSuits = cardSuits;
this.cardNumbers = cardNumbers;
//this.cardLocation = cardLocation
}

var deck = []
	var createCards = function(){
		for (i=0; i < cardSuits.length; i++) {
			for (o=0;o<cardNumbers.length;o++){		
				deck.push(new Card(cardSuits[i],cardNumbers[o]))
			}
		}
	}
createCards()

var shuffleDeck = []
	var randomizedDeck = function(){
		for (i=0; i<deck.length; i++){
				shuffling = Math.floor(Math.random()* this.deck.length)
				shuffleDeck.push(deck[shuffling])
			}		
		console.log(shuffleDeck)
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
		console.log(playerHand)
		console.log(dealerHand)
		console.log(shuffleDeck)
	}
dealCards()








