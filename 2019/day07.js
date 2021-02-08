const  { exec, readAt } = require('./shared/intcode')

const perm = (l, h) => {
  let perms = [[l]]

  for (let i = l + 1; i <= h; i++) {
    const newPerms = []
    for (let j = 0; j < perms.length; j++) {
      const val = perms[j]
      for (let k = 0; k <= val.length; k++) {
        newPerms.push([...val.slice(0, k), i, ...val.slice(k)])
      }
    }
    perms = newPerms
  }

  return perms
}

module.exports.part1 = (input) => {
  const intcode = input.split(',').map(Number)
  let highest = { output: -Infinity }

  for (const [a, b, c, d, e] of perm(0, 4)) {
    const states = {
      a: exec({ intcode, input: a }),
      b: exec({ intcode, input: b }),
      c: exec({ intcode, input: c }),
      d: exec({ intcode, input: d }),
      e: exec({ intcode, input: e }),
    }

    states.a.input = 0
    states.a = exec(states.a)

    states.b.input = states.a.output
    states.b = exec(states.b)

    states.c.input = states.b.output
    states.c = exec(states.c)

    states.d.input = states.c.output
    states.d = exec(states.d)

    states.e.input = states.d.output
    states.e = exec(states.e)

    if (states.e.output > highest.output) {
      highest = states.e
    }
  }

  return highest.output
}

module.exports.part2 = (input) => {
  const intcode = input.split(',').map(Number)
  let highest = { output: -Infinity }

  for (const [a, b, c, d, e] of perm(5, 9)) {
    const states = {
      a: exec({ intcode, input: a }),
      b: exec({ intcode, input: b }),
      c: exec({ intcode, input: c }),
      d: exec({ intcode, input: d }),
      e: exec({ intcode, input: e }),
    }

    let input = 0

    while (true) {
      states.a.input = input
      states.a = exec(states.a)

      states.b.input = states.a.output
      states.b = exec(states.b)

      states.c.input = states.b.output
      states.c = exec(states.c)

      states.d.input = states.c.output
      states.d = exec(states.d)

      states.e.input = states.d.output
      states.e = exec(states.e)

      if (states.e.output > highest.output) {
        highest = states.e
      }

      if (readAt(states.e, 0, 1) === 99) {
        break
      }

      input = states.e.output
    }
  }

  return highest.output
}

module.exports.perm = perm;
