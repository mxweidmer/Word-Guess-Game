

var userGuess;
var winCount = 0;
var lossCount = 0;
var wordList = [];
var word = [];
var hiddenWord = [];
var guesses = [];


document.onkeyup = function (event) {
    userGuess = event.key;
}
