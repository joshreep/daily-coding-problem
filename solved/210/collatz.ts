export default function collatzSequence(n: number, sequence: number[] = []): number[] {
    if (n < 1) throw new Error('must pass in a positive integer')

    if (sequence.length >= Number.MAX_VALUE || sequence.length >= Number.MAX_SAFE_INTEGER)
        throw new Error('this collatz sequence can not be achieved using javascript')

    sequence.push(n)

    if (n === 1) return sequence

    return collatzSequence(getNextNumberInSequence(n), sequence)
}

function getNextNumberInSequence(n: number) {
    if (isOdd(n)) return 3 * n + 1
    if (isEven(n)) return n / 2
    throw new Error("Something is wrong.  Number given is neither even nor odd.  That's odd...")
}

function isOdd(n: number) {
    return n % 2 === 1
}

function isEven(n: number) {
    return n % 2 === 0
}
