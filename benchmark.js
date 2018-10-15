const glob = require('glob')
const path = require('path')
const fs = require('fs')
const stream = require('table').createStream({
    columnDefault: {
        width: 10
    },
    columnCount: 4,
    columns: {
        0: {
            width: 4
        },
        1: {
            width: 3
        },
        2: {
            width: 7
        },
        3: {
            width: 9
        }
    }
})
stream.write(['Year', 'Day', 'Part', 'Time (ms)'])

/** @type {Map<string, Map<string, Map<key, Function|string>>>} */
const solutions = new Map()
const testsPerSolution = 25

for (const yearDir of glob.sync('20*/')) {
    const year = path.basename(yearDir)

    const yearMap = new Map()
    solutions.set(year, yearMap)

    for (const dayDir of glob.sync(`${year}/day*`)) {
        const day = path.basename(dayDir)

        const dayMap = new Map()
        dayMap.set(
            'input',
            fs.readFileSync(`${year}/${day}/input`, { encoding: 'UTF-8' })
        )
        const daySolutions = new Map()
        dayMap.set('solutions', daySolutions)
        yearMap.set(day, dayMap)

        for (const partFile of glob.sync(`${year}/${day}/part!(*.test).js`)) {
            const part = path.parse(partFile).name

            daySolutions.set(part, require(`./${partFile}`))
        }
    }
}

for (const [year, days] of solutions) {
    let solutionsTested = 0
    let totalMs = 0

    for (const [day, parts] of days) {
        const input = parts.get('input')

        for (const [part, solution] of parts.get('solutions')) {
            const solve = solution.bind(null, input)
            let totalTimeInMs = 0

            for (let i = 0; i < testsPerSolution; i++) {
                const start = process.hrtime()
                solve()
                const diff = process.hrtime(start)

                const ms = diff[0] * 1e3 + diff[1] / 1e6
                totalTimeInMs += ms
            }

            solutionsTested++
            const average = totalTimeInMs / testsPerSolution
            totalMs += average

            stream.write([
                year,
                parseInt(day.slice(-2, day.length)),
                part.slice(-1, part.length),
                average.toFixed(3)
            ])
        }
    }

    stream.write(['', '', 'Total', totalMs.toFixed(3)])
    stream.write(['', '', 'Average', (totalMs / solutionsTested).toFixed(3)])
}

console.log('\n')
