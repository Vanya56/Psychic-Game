// creat array of words
var words = ["ewok","chewbacca","yoda","vader","tatooine","endor","naboo"];
// choose words at random
var randWord = Math.floor(Math.random() * words.length);
var chosenWord = words[randWord];
console.log(chosenWord);
var underScore = [];
var rightword = [];
var wrongword = [];
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("RightGuess");
// create underscores based on word length
let underscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push("_");
       
    }
    return underScore;
}

// get users guess
document.addEventListener("keypress",(event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
  
    if(chosenWord.indexOf(keyword) > -1) {
        rightword.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore().join("");
        docRightGuess[0].innerHTML = docRightGuess().join("");
        if(underScore.join("") == chosenWord) {
            alert("You win!");
        }
        
    }
    // if worng push to wrongword array
    else {
        wrongword.push(keyword);
       }
});

// docUnderScore[0].innerHTML = underScore().join("");
// check if guess is right


// if right push to right array
// if wrong push to wrong array
