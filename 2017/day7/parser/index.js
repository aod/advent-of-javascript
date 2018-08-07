const pegjs = require('pegjs')

const grammar = `
    Program = Expression*

    Expression = name:Name weight:Weight children:Children? Eol? {
        return { name, weight, children }
    }

    Name = v:String _ { return v }

    Weight = "(" v:Digit ")" _? { return v }

    Child = v:String ","? _? { return v }
    Children = "->" _ v:Child+ { return v }

    // Helpers
    Digit = d:[0-9]+ { return parseInt(d.join(''), 10) }
    String = s:[a-z]+ { return s.join('') }
    Eol = "\\r"? "\\n"
    _ = " "
`

const parser = pegjs.generate(grammar)

module.exports = parser
