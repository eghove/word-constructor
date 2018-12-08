//for the Letter constructor

let Letter = function (letter, guess) {
    this.actualLetter = letter.toString();
    this.beenGuessed = false;
    this.attempt = guess;
    this.display = function () {
        if (this.beenGuessed===true) {
            return this.actualLetter;
        } else {
            return "__";
        }
    }

    this.guessing = function () {
        if (this.attempt==this.actualLetter) {
            this.beenGuessed = true;
        } else {
            this.beenGuessed = false;
        }
        return this.display();
    }
}

// let guess1 = new Letter ('H');
// var test=guess1.guessing();
// console.log(guess1.actualLetter + " " + guess1.attempt);
// console.log(test);

//exporting this so other files can use it.
module.exports = Letter;