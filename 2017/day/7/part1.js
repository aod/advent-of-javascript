module.exports = input => {
    const list = require('./parser').parse(input)
        .filter(item => item.children !== null);
    const childs = [].concat(...list.map(item => item.children));
    return list.filter(item => !childs.includes(item.name))[0].name;
}
