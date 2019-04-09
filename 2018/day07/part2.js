const Instruction = require('./lib/Instruction')
const Worker = require('./lib/Worker')

module.exports = (input, workersAmount = 5, baseWorkHours = 60) => {
    const instruction = new Instruction(input)
    const workers = new Array(workersAmount)
        .fill(null)
        .map(() => new Worker(null, baseWorkHours))

    let second = 0

    for (let order = ''; order.length < instruction.size; second++) {
        for (const worker of workers) {
            if (!worker.finished) {
                worker.work()
                continue
            }

            order += worker.letter

            const step = instruction.steps.get(worker.letter)
            if (step && step.next) {
                step.done = true
                instruction.addNextSteps(...step.next)
            }

            const nextStepToWork = instruction.nextStep
            instruction.currentSteps.delete(nextStepToWork.letter)

            worker.reset(nextStepToWork.letter)
        }
        // console.log(
        //     `${second}\t${workers
        //         .map(w => w.letter || '.')
        //         .join('\t')}\t${order}`
        // )
    }

    // 969 Too high
    // 894 Too high
    return second - 1
}
