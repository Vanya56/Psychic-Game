// creat array of words
var words = ["ewok","chewbacca","yoda","vader","tatooine","endor","naboo"];
// choose words at random
var randWord = Math.floor(Math.random() * words.length);
var chosenWord = words[randWord];
console.log(chosenWord);
var underScore = [];
var rightword = [];
var wrongword = [];
// create underscores based on word length
let underscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}
console.log(underscore());
// get users guess
document.addEventListener("keypress",(event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
    // if guess is correct push to rightword array
    if(chosenWord.indexOf(keyword) > -1) {
        rightword.push(keyword);
        console.log(rightword);
    }
    // if worng push to wrongword array
    else {
        wrongword.push(keyword);
        console.log(wrongword);
    }
    // console.log(keyword);
});
// check if guess is right
underScore[chosenWord.indexOf(keyword)] = keyword;
console.log(keyword);

// if right push to right array
// if wrong push to wrong array
