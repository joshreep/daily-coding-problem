export default class PerfectNumberFinder {
    private static _perfectNumbers: number[] = []

    static get knownPerfectNumbers() {
        return this._perfectNumbers
    }

    static find(n: number) {
        const index = n - 1
        if (this._perfectNumbers[index]) return this._perfectNumbers[index]

        const lastItem = this._perfectNumbers.at(-1)

        let i = lastItem ? lastItem + 1 : 0
        while (!this._perfectNumbers[index]) {
            const sumOfDigits = this._getSumOfDigits(i)

            if (sumOfDigits == 10) {
                this._perfectNumbers.push(i)
            }

            i++
        }

        return this._perfectNumbers[index]
    }

    private static _getPerfectNumber28AndUnder(num: number) {
        if (num > 28 || num < 1) throw new RangeError('You can only use this shortcut pattern for numbers 1 - 28')

        return +`${num}${10 - this._getSumOfDigits(num)}`
    }

    private static _getSumOfDigits(num: number) {
        const digits = num.toString().split('')
        const sumOfDigits = digits.reduce((prev, curr) => prev + +curr, 0)

        return sumOfDigits
    }
}
