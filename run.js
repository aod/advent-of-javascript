#!/usr/bin/env node

const { readFileSync } = require('fs')
const { resolve } = require('path')

const { year, day, part, input } = require('yargs').options({
    year: {
        alias: 'y',
        type: 'number',
        default: 2017
    },
    day: {
        alias: 'd',
        type: 'number',
        demandOption: true
    },
    part: {
        alias: 'p',
        type: 'number'
    },
    input: {
        alias: 'i',
        type: 'string'
    }
}).argv

const puzzle = require(`./${year}/day${day}/`)
const puzzleInput = input
    ? input
    : readFileSync(resolve(__dirname, `${year}/day${day}/input`), {
          encoding: 'UTF-8'
      })
const answer = puzzle(puzzleInput) || []

console.log(`AOC[${year}]:`)
console.log(
    !part
        ? answer.map((v, i) => `D${day} P${i + 1} -> ${v}`).join('\n')
        : `D${day} P${part} -> ${answer[part - 1]}`
)
