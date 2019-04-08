module.exports = class Step {
    constructor(letter) {
        this.letter = letter
        this.value = letter.charCodeAt(0)
        this.next = []
        this.previous = []
        this.done = false
    }
}
