//console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
//This is the first card that the user flipped.
var cardOne = cards [0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
//This is the second card that the user flipped.
var cardTwo = cards [2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
//Check to see if user played two cards.
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}