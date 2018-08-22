module.exports = class Process {
    constructor(fn, state = {}) {
        this.fn = fn
        this.state = state

        this.events = new Map()
        this.started = false
    }

    on(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set())
        }
        this.events.get(event).add(cb.bind(this.state))

        return this
    }

    fire(event, ...data) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(cb => cb(...data))
        }
    }

    start(...args) {
        if (this.started) {
            return
        }
        this.started = true

        return Object.assign(this.state, this.fn(...args))
    }
}
