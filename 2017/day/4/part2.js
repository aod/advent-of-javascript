module.exports = input =>
    input.split(/\r?\n/)
        .map(passphrase => passphrase.split(' ')
            .map(word => word.split('').sort().join(''))
        )
        .filter(words => words.length - new Set(words).size === 0)
        .length;
