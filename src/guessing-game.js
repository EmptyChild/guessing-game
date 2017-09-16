class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.guessArr = [];

        for (let i = min; i <= max; i++) {
            this.guessArr.push(i);
        }
        this.LeftBorder = 0;
        this.RightBorder = this.guessArr.length - 1;
    }

    guess() {

        let guessIndex = Math.ceil((this.LeftBorder + this.RightBorder) / 2);
        this.lastGuessIndex = guessIndex;
        return this.guessArr[guessIndex];
    }

    lower() {
        this.RightBorder = this.lastGuessIndex;
    }

    greater() {
        this.LeftBorder = this.lastGuessIndex;
    }
}

module.exports = GuessingGame;