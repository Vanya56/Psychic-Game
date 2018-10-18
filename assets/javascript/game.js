// creat array of words
var words = ["ewok","chewbacca","yoda","vader","tatooine","endor","naboo"];
// choose words at random
var randWord = Math.floor(Math.random() * words.length);
var rightWord = [];
var wrongWord = [];
var chosenWord = words[randWord];
var underScore = [];
// Testing
console.log(chosenWord);
// var docUnderScore = document.getElementsByClassName("underscore");
// var docRightGuess = document.getElementsByClassName("RightGuess");
// create underscores based on word length
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push("_");
       
    }
    return underScore;
}
// Testing
console.log(generateUnderscore());
// get users guess
document.addEventListener("keypress",(event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    if(chosenWord.indexOf(keyword) > -1) {
        // if guess is right
        rightWord.push(keyword);
        // Replace underscore with letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        if(underScore.join('') == chosenWord) {
            alert('YOU WIN!');
        }
        // testing
        console.log(rightWord);
}
else {
    // if guess is wrong
    wrongWord.push(keyword);
    // testing
    console.log(wrongWord);
}
    // Testing
    console.log(event);
    console.log(keycode);
    console.log(keyword);
});


