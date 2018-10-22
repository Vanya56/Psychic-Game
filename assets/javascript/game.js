// creat array of words
var words = ["ewok","chewbacca","yoda","vader","tatooine","endor","naboo"];
// choose words at random
var randWord = Math.floor(Math.random() * words.length);
var rightWord = [];
var wrongWord = [];
var chosenWord = words[randWord];
var underScore = [];
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");
// Testing
console.log(chosenWord);
alert("Make your first letter choice.");

// create underscores based on word length
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push("_");
      
       }
    return underScore;
    // docUnderScore[0].innerHTML = chosenWord.length("");
}
// Testing
console.log(generateUnderscore());

// get users guess
document.addEventListener("keypress",(event) => {
    // var keycode = event.keyCode;
    var keyword = String.fromCharCode(event.keyCode);
    if(chosenWord.indexOf(keyword) > -1) {
        // if guess is right
        rightWord.push(keyword);
        docUnderScore[0].innerHTML = underScore.join("");
        // Replace underscore with letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docRightGuess[0].innerHTML = rightWord.join("");
    if(underScore.join('') == chosenWord) {
            alert('YOU WIN!');
        }
        // testing
        console.log(chosenWord);
        console.log(rightWord);
}
else {
    // if guess is wrong
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord.join("");

}

    
    // testing
    console.log(wrongWord);

    // Testing
    console.log(event);
    console.log(keycode);
    console.log(keyword);
});


