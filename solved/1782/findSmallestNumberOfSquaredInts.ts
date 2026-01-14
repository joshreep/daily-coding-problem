export default function findSmallestNumberOfSquaredInts(integer: number) {
    if (!Number.isInteger(integer)) throw `Must pass in an integer.  "${integer} given.`

    return inner(integer, 0)
}

function inner(integer: number, count: number): number {
    const squareRoot = Math.sqrt(integer)

    if (Number.isInteger(squareRoot)) return count + 1

    const largestSquareRoot = Math.floor(squareRoot)

    return inner(integer - largestSquareRoot ** 2, count + 1)
}
