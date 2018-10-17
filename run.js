#!/usr/bin/env node

const { readFileSync } = require('fs')

const { year, day, part } = require('yargs').options({
    year: {
        alias: 'y',
        type: 'number',
        default: 2017
    },
    day: {
        alias: 'd',
        type: 'string',
        demandOption: true
    },
    part: {
        alias: 'p',
        type: 'number',
        demandOption: true
    }
}).argv

const pathToDay = `./${year}/day${day.padStart(2, '0')}`

const puzzle = require(`${pathToDay}/part${part}`)
const puzzleInput = readFileSync(`${pathToDay}/input`, {
    encoding: 'UTF-8'
})

const start = process.hrtime()
console.log(puzzle(puzzleInput))
const diff = process.hrtime(start)

const ms = diff[0] * 1e3 + diff[1] / 1e6
console.log(`Finished in ${ms.toFixed(3)}ms`)
