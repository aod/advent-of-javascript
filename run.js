#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const argv = require('yargs')
    .options({
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
            type: 'string',
            default: 'run.input'
        }
    })
    .argv;

if (argv.day > 0 && argv.day < 26) {
    const dayNumber = argv.day < 10
        ? `0${argv.day}`
        : argv.day;

    let file = path.join(__dirname, `day${dayNumber}-part${argv.part}.js`);

    if (fs.existsSync(file)) {
        const f = require(file);

        let data = argv.input === undefined ? 'run.input' : argv.input;
        let dataFile = path.join(__dirname, data);

        if (fs.existsSync(dataFile)) {
            data = fs.readFileSync(dataFile, { encoding: 'UTF-8' });
        }

        console.log(f(data));
    }
}
