class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.guessArr = [];

        for (let i = min; i <= max; i++) {
            this.guessArr.push(i);
        }
        //this.LeftBorder = 0;
        //this.RightBorder = this.guessArr.length - 1;
    }

    guess() {

        let guessIndex = Math.ceil((this.guessArr.length - 1) / 2);
        this.lastGuessIndex = guessIndex;
        return this.guessArr[guessIndex];
    }

    lower() {
        this.guessArr.length = this.lastGuessIndex + 1;
    }

    greater() {
        this.guessArr.splice(0, this.lastGuessIndex);
    }
}

module.exports = GuessingGame;