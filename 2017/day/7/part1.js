const pegjs = require('pegjs');

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
`;

const parser = pegjs.generate(grammar);

module.exports = input => {
    const list = parser.parse(input)
        .filter(item => item.children !== null);
    const childs = [].concat(...list.map(item => item.children));
    return list.filter(item => !childs.includes(item.name))[0].name;
}
