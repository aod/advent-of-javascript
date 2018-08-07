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
        type: 'number',
        default: 1
    },
    input: {
        alias: 'i',
        type: 'string'
    }
}).argv

const puzzle = require(resolve(__dirname, `${year}/day/${day}/part${part}.js`))
const puzzleInput = input
    ? input
    : readFileSync(resolve(__dirname, `${year}/day/${day}/input`), {
          encoding: 'UTF-8'
      })
const answer = puzzle(puzzleInput)

console.log(`[${year}] D${day}-P${part} -> ${answer}`)
