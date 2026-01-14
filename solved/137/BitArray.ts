export type Bit = 1 | 0

export default class BitArray {
    constructor(size: number) {
        this.size = size
        this.array = []
        this.array.length = this.size
    }

    readonly size: number
    private array: Bit[]

    set(index: number, val: Bit) {
        validateIndex(index, this.size)

        this.array[index] = val

        return this
    }

    get(index: number) {
        validateIndex(index, this.size)

        return this.array[index]
    }
}

function validateIndex(index: number, size: number) {
    if (index < 0) throw new Error(`Index must be a positive integer. Instead received ${index}`)

    if (index >= size)
        throw new Error(`Index must be less than array size (${size}). Instead received ${index}`)
}
