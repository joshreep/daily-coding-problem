import getDigitCombinations from './getDigitCombinations'

describe('getDigitCombinations', () => {
    test('should return all possible combinations', () => {
        const digitMap = { '2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'] }
        const expectedArray = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
        expect(getDigitCombinations('23', digitMap).sort()).toEqual(expectedArray.sort())
    })
})
