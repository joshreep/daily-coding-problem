import perfectSquares, { getPerfectSquares, findSquaresForAGivenSet } from './perfectSquares'

describe('perfectSquares', () => {
    const tests = [
        { given: 4, expected: 1 }, // 4
        { given: 17, expected: 2 }, // 16 + 1
        { given: 18, expected: 2 }, // 9 + 9
        { given: 12, expected: 3 }, // 4 + 4 + 4
        { given: 51, expected: 3 }, // 25 + 25 + 1
        { given: 385, expected: 10 },
    ]

    tests.forEach((t) => {
        test(`given ${t.given}, should return ${t.expected}`, () => {
            expect(perfectSquares(t.given)).toEqual(t.expected)
        })
    })

    test('should throw an error if given a negative number', () => {
        expect(() => perfectSquares(-1)).toThrow()
    })
})

describe('getPerfectSquares', () => {
    const tests = [
        { given: 4, expected: [1, 4] },
        { given: 1, expected: [1] },
        { given: 3, expected: [1] },
        { given: 51, expected: [1, 4, 9, 16, 25, 36, 49] },
        { given: 99, expected: [1, 4, 9, 16, 25, 36, 49, 64, 81] },
        { given: 100, expected: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] },
    ]

    const sortFunction = (a: number, b: number) => a - b

    tests.forEach((t) => {
        test(`given ${t.given}, should return ${JSON.stringify(t.expected)}`, () => {
            const actual = getPerfectSquares(t.given)

            expect(actual.sort(sortFunction)).toEqual(t.expected.sort(sortFunction))
        })
    })

    test('should throw an error if given a negative number', () => {
        expect(() => getPerfectSquares(-1)).toThrow()
    })
})

describe.only('findSquaresForAGivenSet', () => {
    const tests: { given: [number, number[]]; expected: number }[] = [
        { given: [4, [1, 4]], expected: 1 }, // 4
        { given: [4, [1]], expected: 4 }, // 1 + 1 + 1 + 1
        { given: [17, [1, 4, 9, 16]], expected: 2 }, // 16 + 1
        { given: [17, [1, 4, 9]], expected: 3 }, // 9 + 4 + 4
        { given: [17, [1, 4]], expected: 5 }, // 4 + 4 + 4 + 4 + 1
        { given: [18, [1, 4, 9, 16]], expected: 3 }, // 16 + 1 + 1
        { given: [18, [1, 4, 9]], expected: 2 }, // 9 + 9
        { given: [18, [1, 4]], expected: 6 }, // 4 + 4 + 4 + 4 + 1 + 1
        { given: [12, [1, 4, 9]], expected: 4 }, // 9 + 1 + 1 + 1
        { given: [12, [1, 4]], expected: 3 }, // 4 + 4 + 4
    ]

    tests.forEach((t) => {
        test(`given (${t.given.map((v) => JSON.stringify(v))}), should return ${
            t.expected
        }`, () => {
            expect(findSquaresForAGivenSet(...t.given)).toEqual(t.expected)
        })
    })
})
