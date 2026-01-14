const DENOMINATIONS = [25, 10, 5, 1]

export default function findMinNumCoins(n: number) {
    if (!Number.isInteger(n)) throw `input must be an integer.  ${n} given.`

    return inner(n, 0)
}

function inner(n: number, count: number): number {
    if (n === 0) return count

    const denomination = DENOMINATIONS.find((d) => d <= n)

    if (!denomination) throw `Something went wrong. No denomination found for given value ${n}`

    const numCoinsForThisDenomination = Math.floor(n / denomination)

    const remaining = n - numCoinsForThisDenomination * denomination

    return inner(remaining, count + numCoinsForThisDenomination)
}
