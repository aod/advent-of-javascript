const previousStepsDone = (steps, step) => {
    for (const s of steps[step].previous) {
        if (!steps[s].done) {
            return false
        }
    }
    return true
}

/**
 * @param {string} input
 */
module.exports = input => {
    const steps = {}

    for (let i = 65; i < 91; i++) {
        const letter = String.fromCharCode(i)
        steps[letter] = {
            done: false,
            next: [],
            previous: [],
            value: i,
            letter
        }
    }

    const firstSteps = new Set()
    const nonFirstSteps = new Set()

    for (const line of input.split('\n')) {
        const a = line[5]
        const b = line[36]

        steps[a].next.push(b)
        steps[b].previous.push(a)

        nonFirstSteps.add(b)
        if (!nonFirstSteps.has(a)) {
            firstSteps.add(a)
        }
    }

    let currentSteps = firstSteps
    let order = ''

    while (true) {
        let currentStep = { value: Number.MAX_SAFE_INTEGER }

        for (const stepNumber of currentSteps.values()) {
            const step = steps[stepNumber]
            if (
                !previousStepsDone(steps, stepNumber) ||
                step.value > currentStep.value
            ) {
                continue
            }
            currentStep = step
        }

        currentStep.done = true
        order += currentStep.letter
        currentSteps.delete(currentStep.letter)
        currentStep.next.forEach(currentSteps.add.bind(currentSteps))

        if (currentSteps.size < 1) {
            break
        }
    }

    return order
}
