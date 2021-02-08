const  { parseOpcode, readAt, exec } = require('./intcode')

describe('opcode parsing', () => {
  it('should be able to parse opcodes', () => {
    expect(parseOpcode(2).opcode).toBe(2)
    expect(parseOpcode(199).opcode).toBe(99)
  })

  it('should be able to parse parameter modes', () => {
    expect(parseOpcode(10102).modes).toStrictEqual([1, 0, 1])
  })

  it('should be able to pad parameter modes with 0s', () => {
    expect(parseOpcode(2).modes).toStrictEqual([0, 0, 0])
    expect(parseOpcode(102).modes).toStrictEqual([1, 0, 0])
  })

  it('should throw on too many parameter modes', () => {
    expect(() => parseOpcode(11111102)).toThrow()
  })

  it('should throw on invalid parameter modes', () => {
    expect(() => parseOpcode(23402)).toThrow()
  })
})

describe('reading memory', () => {
  it('should return the paramter itself on mode 1', () => {
    expect(readAt({ intcode: [1, 0, 0, 0, 99], pointer: 0 }, 1, 1)).toBe(0)
  })

  it('should return the value at the address on mode 0', () => {
    expect(readAt({ intcode: [1, 0, 0, 0, 99], pointer: 0 }, 1, 0)).toBe(1)
  })

  it('should be able to output a large number', () => {
    expect(
      readAt({ intcode: [104, 1125899906842624, 99], pointer: 0 }, 1, 1)
    ).toBe(1125899906842624)
  })

  it('should return a 16 digit number with intcode 1102,34915192,34915192,7,4,7,99,0', () => {
    expect(
      String(
        exec({ intcode: [1102, 34915192, 34915192, 7, 4, 7, 99, 0] }).output
      ).length
    ).toBe(16)
  })
})

describe('opcodes', () => {
  it('should throw on an invalid opcode', () => {
    expect(() => exec({ intcode: [-1], pointer: 0 })).toThrow()
  })

  it('should parse opcode 99 correctly', () => {
    expect(exec({ intcode: [99, 1, 0, 0, 0] }).intcode).toStrictEqual([
      99,
      1,
      0,
      0,
      0,
    ])
  })

  it('should parse opcode 1 correctly', () => {
    expect(exec({ intcode: [1, 0, 0, 0] }).intcode).toStrictEqual([2, 0, 0, 0])
    expect(exec({ intcode: [1101, 1, 5, 0] }).intcode).toStrictEqual([
      6,
      1,
      5,
      0,
    ])
    expect(exec({ intcode: [1001, 0, 5, 0] }).intcode).toStrictEqual([
      1006,
      0,
      5,
      0,
    ])
  })

  it('should parse opcode 2 correctly', () => {
    expect(exec({ intcode: [2, 0, 0, 0] }).intcode).toStrictEqual([4, 0, 0, 0])
    expect(exec({ intcode: [1102, 2, 5, 0] }).intcode).toStrictEqual([
      10,
      2,
      5,
      0,
    ])
    expect(exec({ intcode: [1002, 3, 5, 3] }).intcode).toStrictEqual([
      1002,
      3,
      5,
      15,
    ])
  })

  it('should parse opcode 3 correctly', () => {
    expect(exec({ intcode: [3, 0, 99], input: 1 }).intcode).toStrictEqual([
      1,
      0,
      99,
    ])
  })

  it('should parse opcode 4 correctly', () => {
    expect(exec({ intcode: [1002, 4, 3, 4, 33] }).intcode).toStrictEqual([
      1002,
      4,
      3,
      4,
      99,
    ])
    expect(exec({ intcode: [1101, 100, -1, 4, 0] }).intcode).toStrictEqual([
      1101,
      100,
      -1,
      4,
      99,
    ])
    expect(exec({ intcode: [104, 1125899906842624, 99] }).output).toBe(
      1125899906842624
    )
  })

  it('should be able to jump with opcode 5 and 6', () => {
    // position mode
    // input !== 0
    expect(
      exec({
        intcode: [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9],
        input: 8,
      }).output
    ).toBe(1)
    expect(
      exec({
        intcode: [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9],
        input: 0,
      }).output
    ).toBe(0)
    // immediate mode
    // input !== 0
    expect(
      exec({
        intcode: [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1],
        input: 9,
      }).output
    ).toBe(1)
    expect(
      exec({
        intcode: [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1],
        input: 0,
      }).output
    ).toBe(0)
  })

  it('should be able to compare against the input with opcode 7 and 8', () => {
    // position mode
    // input === 8
    expect(
      exec({ intcode: [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], input: 8 }).output
    ).toBe(1)
    expect(
      exec({ intcode: [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], input: 5 }).output
    ).toBe(0)
    // input < 8
    expect(
      exec({ intcode: [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], input: 13 }).output
    ).toBe(0)
    expect(
      exec({ intcode: [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], input: 5 }).output
    ).toBe(1)
    // immediate mode
    // input === 8
    expect(
      exec({ intcode: [3, 3, 1108, -1, 8, 3, 4, 3, 99], input: 8 }).output
    ).toBe(1)
    expect(
      exec({ intcode: [3, 3, 1108, -1, 8, 3, 4, 3, 99], input: 5 }).output
    ).toBe(0)
    // input < 8
    expect(
      exec({ intcode: [3, 3, 1107, -1, 8, 3, 4, 3, 99], input: 13 }).output
    ).toBe(0)
    expect(
      exec({ intcode: [3, 3, 1107, -1, 8, 3, 4, 3, 99], input: 5 }).output
    ).toBe(1)
  })

  describe('9', () => {
    it('should increase the relativeBase by 2 with intcode [9, 2, 99]', () => {
      expect(exec({ intcode: [9, 2, 99] }).relativeBase).toBe(99)
    })

    it('should decrease the relativeBase by 2 with intcode [9, -2, 99]', () => {
      expect(exec({ intcode: [9, -2, 99] }).relativeBase).toBe(0)
    })

    it('should produce a copy of itself with intcode 109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99', () => {
      // prettier-ignore
      const intcode = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99]
      const output = []

      let program = {
        intcode: intcode.slice(),
      }

      while (true) {
        program = exec(program)
        if (readAt(program, 0, 1) === 99) {
          break
        }
        output.push(program.output)
      }

      expect(output).toStrictEqual(intcode)
    })
  })
})
