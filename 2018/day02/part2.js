/**
 * @param {string} input
 */
module.exports = input => {
    let ids = input.split(/\r?\n/)

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]

        for (let j = 0; j < ids.length; j++) {
            const compareId = ids[j]

            if (id === compareId) {
                continue
            }

            let lettersNotSame = []

            for (let k = 0; k < compareId.length; k++) {
                const letter = id[k]
                const compareLetter = compareId[k]

                if (letter === compareLetter) {
                    continue
                }

                lettersNotSame.push(k)
            }

            if (lettersNotSame.length === 1) {
                const notSameIndex = lettersNotSame[0]
                return id.substr(0, notSameIndex) + id.substr(notSameIndex + 1)
            }
        }
    }

    throw new Error(
        'Failed to find answer. Input does not contain 2 words which differ one letter'
    )
}
