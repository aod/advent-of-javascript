const pegjs = require('pegjs')

const grammar = `
    Program = Expression*

    Expression =
        register:String _ instruction:String _ value:Int _
        "if" _ ifregister:String _ ifoperator:Operator _ ifvalue:Int Eol? {
            return { register, instruction, value, eval: [ifregister, ifoperator, ifvalue] }
        }

    Operator = "=="
        / "!="
        / ">="
        / ">"
        / "<="
        / "<"

    Int = n:"-"? v:Number { return n ? -v : v }
    String = v:Letter+ { return v.join('') }

    Number = v:Digit+ { return parseInt(v.join('')) }

    Digit = [0-9]
    Letter = [a-zA-Z]
    _ = " "
    Eol = "\\r"? "\\n"
`

const parser = pegjs.generate(grammar)

module.exports = parser
