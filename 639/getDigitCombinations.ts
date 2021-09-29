import { on } from 'events'

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Letter =
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'y'
    | 'z'

export type DigitMap = {
    [key: string]: Letter[]
}

export default function getDigitCombinations(digitString: string, digitMap: DigitMap): string[] {
    const digits = digitString.split('')
    validateDigits(digits)

    const result: string[] = []

    digits.forEach((digit) => {
        const possibleLetters = digitMap[digit]
        const possibleCombination 
    })

    return result
}

function validateDigits(digits: string[]) {
    digits.forEach((digit) => {
        if (!isNaN(+digit))
            throw new TypeError(`Expected digits to be numerical.  Instead, received "${digit}"`)
    })
}
