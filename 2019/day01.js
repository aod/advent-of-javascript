module.exports.part1 = (input) => {
  return input
    .split('\n')
    .map(v => Math.floor(v / 3) - 2)
    .reduce((acc, cur) => acc + cur, 0)
}

module.exports.part2 = (input) => {
  return input
    .split('\n')
    .map(v => Math.floor(v / 3) - 2)
    .map(v => {
      let sum = 0
      while (v > 0) {
        sum += v
        v = Math.floor(v / 3) - 2
      }
      return sum
    })
    .reduce((acc, cur) => acc + cur, 0)
}
