module.exports = {
    path: {
        day: ({ day }) => `day${('' + day).padStart(2, '0')}`,
        part: 'part$.js',
    },
    input: './input',
}
