const isValidPassword = (password, strict = false) => {
  let groups = { [password[0]]: 1 }

  for (let i = 1; i < password.length; i++) {
    const current = password[i]

    if (current < password[i - 1]) {
      return false
    }

    groups[current] = groups[current] + 1 || 1
  }

  if (strict && !Object.values(groups).find(x => x === 2)) {
    return false
  }

  return Object.values(groups).some(x => x >= 2)
}

module.exports.part1 = (input) => {
  const [min, max] = input.split('-')
  let count = 0

  for (let i = min; i <= max; i++) {
    if (isValidPassword(i.toString())) {
      count++
    }
  }

  return count
}

module.exports.part2 = (input) => {
  const [min, max] = input.split('-')
  let count = 0

  for (let i = min; i <= max; i++) {
    if (isValidPassword(i.toString(), true)) {
      count++
    }
  }

  return count
}

module.exports.isValidPassword = isValidPassword;
