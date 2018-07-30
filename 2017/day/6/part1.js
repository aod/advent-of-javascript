class Area {
    constructor(memoryBanks) {
        this.memoryBanks = memoryBanks;
        this.steps = 0;
        this.history = {};
        this.loopDetected = undefined;

        this.history[this.memoryBanks] = true;
    }

    distribute() {
        const index = this.highest;

        let value = this.memoryBanks[index];
        this.memoryBanks[index] = 0;

        let i = index + 1;
        while (value > 0) {
            if (i >= this.memoryBanks.length) {
                i = 0;
            }

            this.memoryBanks[i] += 1;
            value--;
            i++;
        }
        this.steps++;

        if (this.history.hasOwnProperty(this.memoryBanks)) {
            this.loopDetected = this.steps;
        }

        this.history[this.memoryBanks] = true;
    }

    get highest() {
        return this.memoryBanks.indexOf(Math.max(...this.memoryBanks));
    }
}

module.exports = input => {
    const area = new Area(input.split(/\t/).map(Number));

    while (area.loopDetected === undefined) {
        area.distribute();
    }

    return area.steps;
}
