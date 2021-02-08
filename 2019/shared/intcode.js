const exec = ({
  intcode = [99],
  pointer = 0,
  input = 1,
  relativeBase = 0,
}) => {
  const state = {
    intcode: intcode.slice(),
    pointer,
    input,
    output: null,
    relativeBase,
  }

  while (state.pointer < state.intcode.length) {
    const { opcode, modes } = parseOpcode(state.intcode[state.pointer])

    switch (opcode) {
      case 1:
        writeAt(
          state,
          3,
          modes[2],
          readAt(state, 1, modes[0]) + readAt(state, 2, modes[1])
        )
        state.pointer += 4
        break

      case 2:
        writeAt(
          state,
          3,
          modes[2],
          readAt(state, 1, modes[0]) * readAt(state, 2, modes[1])
        )
        state.pointer += 4
        break

      case 3:
        if (state.input === null) {
          return state
        }
        writeAt(state, 1, modes[0], state.input)
        state.input = null
        state.pointer += 2
        break

      case 4:
        state.output = readAt(state, 1, modes[0])
        state.pointer += 2
        return state

      case 5:
        if (readAt(state, 1, modes[0]) !== 0) {
          state.pointer = readAt(state, 2, modes[1])
        } else {
          state.pointer += 3
        }
        break

      case 6:
        if (readAt(state, 1, modes[0]) === 0) {
          state.pointer = readAt(state, 2, modes[1])
        } else {
          state.pointer += 3
        }
        break

      case 7:
        if (readAt(state, 1, modes[0]) < readAt(state, 2, modes[1])) {
          writeAt(state, 3, modes[2], 1)
        } else {
          writeAt(state, 3, modes[2], 0)
        }
        state.pointer += 4
        break

      case 8:
        if (readAt(state, 1, modes[0]) === readAt(state, 2, modes[1])) {
          writeAt(state, 3, modes[2], 1)
        } else {
          writeAt(state, 3, modes[2], 0)
        }
        state.pointer += 4
        break

      case 9:
        state.relativeBase += readAt(state, 1, modes[0])
        state.pointer += 2
        break

      case 99:
        return state

      default:
        throw new Error(`Invalid opcode ${opcode}`)
    }
  }

  return state
}

const parseOpcode = (n) => {
  n = String(n)

  if (n.length > 5) {
    throw new Error(`Invalid opcode ${n}`)
  }

  n = n.padStart(5, 0)

  const opcode = Number(n.slice(-2))
  const modes = n
    .slice(0, -2)
    .split('')
    .reverse()
    .map(Number)

  if (modes.some(mode => ![2, 1, 0].includes(mode))) {
    throw new Error(`Invalid parameter modes ${modes}`)
  }

  return { opcode, modes }
}

const readAt = (state, position, mode) => {
  switch (mode) {
    case 0:
      return state.intcode[readAt(state, position, 1)] || 0

    case 1:
      return state.intcode[state.pointer + position] || 0

    case 2:
      return state.intcode[readAt(state, position, 1) + state.relativeBase] || 0
  }
}

const writeAt = (state, position, mode, value) => {
  switch (mode) {
    case 0:
      state.intcode[state.intcode[state.pointer + position]] = value
      return

    case 1:
      throw new Error(`Invalid write mode ${mode}`)

    case 2:
      state.intcode[
        state.relativeBase + state.intcode[state.pointer + position]
      ] = value
      return
  }
}

module.exports = {
  parseOpcode, readAt, writeAt, exec
}
