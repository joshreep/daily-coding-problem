export default function perfectSquares(n: number) {
    if (n < 1) throw new Error('The given number must be positive')

    const squares = getPerfectSquares(n)

    return n
}

export function findSquaresForAGivenSet(n: number, set: number[], total: number = 0): number {
    if (n < 1) return total

    const lastItem = set.sort((a, b) => a - b)[set.length - 1]

    let newSet = n === lastItem ? [] : getPerfectSquares(n - lastItem)
    newSet = newSet.length > set.length ? set : newSet

    return findSquaresForAGivenSet(n - lastItem, newSet, total + 1)
}

export function getPerfectSquares(n: number, squares: number[] = [1]): number[] {
    if (n < 1) throw new Error('The given number must be positive')

    const next = Math.pow(squares.length + 1, 2)

    if (next <= n) return getPerfectSquares(n, [...squares, next])

    return squares
}
