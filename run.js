#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const argv = require('yargs').options({
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

const file = path.resolve(
    __dirname,
    `${argv.year}/day/${argv.day}/part${argv.part}.js`
)

if (fs.existsSync(file)) {
    const puzzle = require(file)
    let input = argv.input
        ? argv.input
        : fs.readFileSync(
              path.resolve(__dirname, `${argv.year}/day/${argv.day}/input`),
              { encoding: 'UTF-8' }
          )

    console.log(puzzle(input))
}
