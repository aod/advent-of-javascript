const { readFileSync } = require('fs')

const part2 = require('./part2')

it('should pass the test input from day 7 part 2', () => {
    const testInput = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`

    expect(part2(testInput, 2, 0)).toBe(15)
})

xit('should equal the answer for day 7 part 2', () => {
    const input = readFileSync(`${__dirname}/input`, { encoding: 'UTF-8' })
    expect(part2(input)).toBe('')
})
