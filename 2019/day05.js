const  { exec, readAt } = require('./shared/intcode')

module.exports.part1 = (input) => {
  let program = exec({
    intcode: input.split(',').map(Number),
    input: 1,
  })

  while (readAt(program, 0, 1) !== 99) {
    program = exec(program)
  }

  return program.output
}

module.exports.part2 = (input) => {
  return exec({ intcode: input.split(',').map(Number), input: 5 }).output
}
