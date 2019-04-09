const Instruction = require('./lib/Instruction')
const Worker = require('./lib/Worker')

module.exports = (input, workersAmount = 5, baseWorkHours = 60) => {
    const instruction = new Instruction(input)
    const workers = new Array(workersAmount)
        .fill(null)
        .map(() => new Worker(null, baseWorkHours))

    let second = 0

    for (let order = ''; order.length < instruction.size; second++) {
        const finishedWorkers = []

        for (const worker of workers) {
            if (!worker.finished) {
                worker.work()
                continue
            }

            finishedWorkers.push(worker)
            order += worker.letter

            const step = instruction.steps.get(worker.letter)
            if (step && step.next) {
                step.done = true
                instruction.addNextSteps(...step.next)
            }
        }

        for (const worker of finishedWorkers) {
            const nextStepToWork = instruction.nextStep
            instruction.currentSteps.delete(nextStepToWork.letter)
            worker.reset(nextStepToWork.letter)
        }
    }

    return second - 1
}
