export default class HitCounter {
    constructor(hits: number[] = []) {
        this._hits = hits
    }

    _hits: number[]

    get hits() {
        return this._hits
    }

    set hits(hits) {
        this._hits = hits
    }

    record(timestamp: number) {}

    total() {}

    range(lower: number, upper: number) {}
}
