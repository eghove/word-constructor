//require the Letter constructor

let Letter = require("./Letter.js");

let Word = function (word) {
    this.chosenWord = word;
    this.splitWord = word.split("");
    this.wordArray = [];
    this.buildWord = function () {
        for (let i =0; i<this.splitWord.length; i++) {
            let temp = new Letter(this.splitWord[i]);
            this.wordArray.push(temp);
        }
        // return (this.wordArray);
    }

    this.displayWord = function () {
        for (let j=0; j<this.wordArray.length; j++) {
            
        }
    }
}

module.exports(Word);
// var word1 = new Word ("Trees");

// console.log(word1.buildWord());

