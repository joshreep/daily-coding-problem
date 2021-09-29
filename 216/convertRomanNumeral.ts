const RomanNumerals: { [key: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}

type RomanNumeralSymbol = 'M' | 'D' | 'C' | 'L' | 'X' | 'V' | 'I'

function convertRomanNumeralToInterger(romanNumeral: string) {
    validateRomanNumeral(romanNumeral)

    const symbols = romanNumeral.split('')
    return symbols.reduce((total, currentSymbol, index) => {
        const remainingSymbols = symbols.slice(index)
        const remainingSymbolsAsNumbers = remainingSymbols.map((s) => RomanNumerals[s])

        if (Math.max(...remainingSymbolsAsNumbers) > RomanNumerals[currentSymbol]) {
            return total - RomanNumerals[currentSymbol]
        }
        
        return total + RomanNumerals[currentSymbol]
    }, 0)
}

function validateRomanNumeral(romanNumeral: string) {
    const symbols = romanNumeral.split('')
    const validRomanNumerals = Object.keys(RomanNumerals)

    symbols.forEach((s) => {
        if (!validRomanNumerals.includes(s.toUpperCase()))
            throw new Error(`${s} is not a valid roman numeral`)
    })
}
