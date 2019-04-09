#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const AOC_STARTING_YEAR = 2015
const AOC_CURRENT_YEAR_IN_PROGRESS = 2018

const argv = process.argv.slice(2)
const [puzzle = '', repeatAmount = 1] = argv.filter(v => !v.startsWith('-'))
const verbose = argv.includes('-v')

const [year, day, part] = puzzle.split('.')
const input = [
    ['year', year, AOC_STARTING_YEAR, AOC_CURRENT_YEAR_IN_PROGRESS],
    ['day', day, 1, 25],
    ['part', part, 1, 2]
]

const toRun = new Map()

for (const [name, part, min, max] of input) {
    toRun.set(name, [])
    if (!part) {
        for (let i = min; i <= max; i++) {
            toRun.get(name).push(i)
        }
    } else {
        part.split(',')
            .map(Number)
            .forEach(value => toRun.get(name).push(value))
    }
}

function run(year, day, part) {
    const solutionId = `${year}.${day}.${part}`.padEnd(9, ' ')

    const solutionsFolderPath = `${year}/day${('' + day).padStart(2, '0')}`
    const inputPath = path.join(__dirname, `../${solutionsFolderPath}/input`)
    const solutionPath = path.join(
        __dirname,
        `../${solutionsFolderPath}/part${part}.js`
    )

    if (!fs.existsSync(solutionPath)) {
        if (verbose) {
            console.warn('\x1b[31m%s\x1b[0m', `❌  0ms${' '.repeat(7)} ${solutionId} => Unable to resolve, file doesn't exist.`)
        }
        return
    }

    const input = fs.readFileSync(inputPath, { encoding: 'UTF-8' })
    const solver = require(solutionPath)

    const solve = solver.bind(null, input)
    const output = solve()
    const maxRepeatAmount = Math.abs(repeatAmount)

    const start = process.hrtime()
    for (let i = 0; i < maxRepeatAmount; i++) {
        solve()
    }
    const diff = process.hrtime(start)
    const diffInMs = diff[0] * 1e3 + diff[1] / 1e6

    const ms = ((diffInMs / maxRepeatAmount).toFixed(3) + 'ms').replace('.', ',').padEnd(10, ' ')

    console.log(`✅  ${ms} ${solutionId} => ${output}`)
}

for (const y of toRun.get('year')) {
    for (const d of toRun.get('day')) {
        for (const p of toRun.get('part')) {
            run(y, d, p)
        }
    }
}
