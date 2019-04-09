module.exports = class Worker {
    constructor(letterToWork, baseWorkHours) {
        this.baseWorkHours = baseWorkHours
        this.reset(letterToWork)
    }

    get finished() {
        return !this.letterToWork || this.time >= this.deadline
    }

    get letter() {
        return this.letterToWork ? this.letterToWork : ''
    }

    reset(letterToWork) {
        this.time = 0
        this.letterToWork = letterToWork
        const letterWeight = this.letter.charCodeAt(0) - 65 || 0
        this.deadline = this.baseWorkHours + letterWeight
    }

    work() {
        this.time++
    }
}
