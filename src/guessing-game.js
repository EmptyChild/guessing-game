class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {

        this.guessTry = Math.ceil((this.min + this.max) / 2);
        return this.guessTry;
    }

    lower() {
        this.max = this.guessTry;
    }

    greater() {
        this.min = this.guessTry;
    }
}

module.exports = GuessingGame;