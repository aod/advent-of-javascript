const  { exec, readAt } = require('./shared/intcode')

module.exports.part1 = (input) => {
  let boostProgram = exec({ intcode: input.split(',').map(Number), input: 1 })

  while (readAt(boostProgram, 0, 1) !== 99) {
    boostProgram = exec(boostProgram)
  }

  return boostProgram.output
}

module.exports.part2 = (input) => {
  let boostProgram = exec({ intcode: input.split(',').map(Number), input: 2 })

  while (readAt(boostProgram, 0, 1) !== 99) {
    boostProgram = exec(boostProgram)
  }

  return boostProgram.output
}
