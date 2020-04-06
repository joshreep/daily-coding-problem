export default class HitCounter {
    constructor(hits: number[] = []) {
        this._hits = hits
    }

    _hits: number[]

    get hits() {
        return this._hits
    }

    set hits(_hits) {
        throw new Error(
            'hits cannot be explicitly set. Call the record method to set hits or pass in array to the constructor',
        )
    }

    record(timestamp: number) {
        this._hits.push(timestamp)
    }

    total() {
        return this._hits.length
    }

    range(lower: number, upper: number) {
        if (lower > upper) {
            throw new Error(
                `lower boundary must be less than upper boundary. ${lower} is greater than ${upper}`,
            )
        }

        return this._hits.filter((hit) => hit >= lower && hit <= upper).length
    }
}
