const { readFileSync } = require('fs')

const part1 = require('./part1')

it('should pass the test input from day 7 part 1', () => {
    const testInput = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`

    expect(part1(testInput)).toBe('CABDFE')
})

it('should equal the answer for day 7 part 1', () => {
    const input = readFileSync(`${__dirname}/input`, { encoding: 'UTF-8' })
    expect(part1(input)).toBe('MNOUBYITKXZFHQRJDASGCPEVWL')
})
