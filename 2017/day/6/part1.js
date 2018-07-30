const Area = require('./lib/Area');

module.exports = input => {
    const area = new Area(input.split(/\t/).map(Number));

    while (area.loopDetected === undefined) {
        area.distribute();
    }

    return area.steps;
}
