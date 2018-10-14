const glob = require('glob')
const path = require('path')
const fs = require('fs')

const aocFiles = glob.sync('20*/day*/+(part|input)!(*.test.js)')

const inputs = new Map()
const solutions = new Map()

for (const aocFile of aocFiles) {
    const [year, day, file] = aocFile.split(path.sep)

    if (file === 'input') {
        inputs.set(
            `${year}/${day}`,
            fs.readFileSync(aocFile, { encoding: 'UTF-8' })
        )
    } else {
        solutions.set(aocFile, require(`./${aocFile}`))
    }
}

for (const [file, solution] of solutions) {
    console.time(file)
    solution(inputs.get(path.dirname(file)))
    console.timeEnd(file)
}
