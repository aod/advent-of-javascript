module.exports = class Process {
    constructor(fn, state = {}) {
        this.fn = fn

        this.events = new Map()
        this.started = false
        this.state = state
    }

    on(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set())
        }
        this.events.get(event).add(cb)

        return this
    }

    fire(event, ...data) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(cb => {
                cb.call(this.state, ...data)
            })
        }
    }

    start(...args) {
        if (this.started) {
            return
        }

        this.started = true
        const output = this.fn(...args)
        Object.assign(this.state, output)

        return this.state
    }
}
