/**
 * @param {string} input
 */
module.exports = input => {
    const ids = input.split(/\r?\n/)

    let twoCount = 0
    let threeCount = 0

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]

        const letterCounts = {}

        for (let j = 0; j < id.length; j++) {
            const letter = id[j]

            if (letter in letterCounts) {
                letterCounts[letter] += 1
            } else {
                letterCounts[letter] = 1
            }
        }

        let twoFound = false
        let threeFound = false

        const letters = Object.entries(letterCounts)

        for (let j = 0; j < letters.length; j++) {
            const [, amount] = letters[j]

            if (!twoFound && amount === 2) {
                twoFound = true
                twoCount += 1
            } else if (!threeFound && amount === 3) {
                threeFound = true
                threeCount += 1
            }

            if (twoFound && threeFound) {
                break
            }
        }
    }

    return twoCount * threeCount
}
