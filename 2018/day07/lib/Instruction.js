const Step = require('./Step')

module.exports = class Instruction {
    constructor(input) {
        this.steps = new Map()
        this.currentSteps = new Set()
        this.order = ''

        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            .split('')
            .forEach(letter => this.steps.set(letter, new Step(letter)))

        input
            .split('\n')
            .map(line => [line[5], line[36]])
            .reduce((nonFirstSteps, [a, b]) => {
                this.steps.get(a).next.push(b)
                this.steps.get(b).previous.push(a)

                nonFirstSteps.add(b)
                if (!nonFirstSteps.has(a)) {
                    this.currentSteps.add(a)
                }

                return nonFirstSteps
            }, new Set())
    }

    get complete() {
        return this.currentSteps.size < 1
    }

    get nextStep() {
        let currentStep = { value: Number.MAX_SAFE_INTEGER }

        for (const stepNumber of this.currentSteps.values()) {
            const step = this.steps.get(stepNumber)

            if (
                !this.previousStepsDone(step) ||
                step.value > currentStep.value
            ) {
                continue
            }

            currentStep = step
        }

        return currentStep
    }

    get size() {
        return [...this.steps.values()].reduce(
            (acc, cur) =>
                acc + (cur.previous.length > 0 || cur.next.length > 0 ? 1 : 0),
            0
        )
    }

    previousStepsDone(step) {
        for (const s of step.previous) {
            if (!this.steps.get(s).done) {
                return false
            }
        }
        return true
    }

    processNextStep() {
        if (this.done) {
            return
        }

        let currentStep = this.nextStep
        currentStep.done = true
        this.order += currentStep.letter
        this.currentSteps.delete(currentStep.letter)
        this.addNextSteps(...currentStep.next)
    }

    addNextSteps(...stepLetters) {
        for (const stepLetter of stepLetters) {
            this.currentSteps.add(stepLetter)
        }
    }
}
