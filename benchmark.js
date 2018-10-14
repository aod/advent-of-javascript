const glob = require('glob')
const path = require('path')
const fs = require('fs')

const solutions = new Map()

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
    console.group(year)

    for (const [day, parts] of days) {
        console.group(day)

        const input = parts.get('input')

        for (const [part, solution] of parts.get('solutions')) {
            const solve = solution.bind(null, input)

            const start = process.hrtime()
            solve()
            const diff = process.hrtime(start)
            const ms = diff[0] * 1e3 + diff[1] / 1e6

            console.log(`solved ${part} in ${ms.toFixed(2)}ms`)
        }

        console.groupEnd()
    }

    console.groupEnd()
}
