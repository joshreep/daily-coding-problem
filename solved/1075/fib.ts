export default function fib(n: number): number {
    // from 0 - 70 we can use the golden ratio to keep a space/time complexity of O(1)
    if (n <= 10) {
        return Math.round(
            (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) / Math.sqrt(5),
        )
    }

    // anything above 70 starts to reflect the inaccuracies of JS math and needs to accept a time complexity of O(n)
    let previous = 0,
        current = 1,
        target = 0,
        i = 1

    while (i < n) {
        target = previous + current
        previous = current
        current = target
        i++
    }

    return target as number
}
