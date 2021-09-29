type MergeOptions = { preferLeft?: boolean; uniqueArrays?: boolean }

type UnArray<T> = T extends Array<infer U> ? U : T

/**
 * Deeply merges two objects
 * @param left Left object to merged
 * @param right Right Object to be merged
 * @param options An object of options to be passed in
 * @param preferRight Determines which side wins in a tie
 */
function deepMerge<T extends any>(left: T, right: T, options: MergeOptions): T {
    if (Array.isArray(left) && Array.isArray(right))
        return deepMergeArrays<keyof UnArray<T>>(left, right, options)
    return left
}

function deepMergeArrays<T>(left: T[], right: T[], { uniqueArrays }: MergeOptions) {
    if (uniqueArrays) return [...new Set([...left, ...right])]

    return [...left, ...right]
}

function validateLeftAndRightTypes(left: unknown, right: unknown) {
    const leftIsObject = typeof left === 'object'
    if (typeof left !== typeof right)
        throw new TypeError(`Cannot Merge ${typeof left} and ${typeof right}`)

    const leftIsArray = Array.isArray(left)
    const rightIsArray = Array.isArray(right)
    if (leftIsArray !== rightIsArray) throw new TypeError(``)
}

export default deepMerge
