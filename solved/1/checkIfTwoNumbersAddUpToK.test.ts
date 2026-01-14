import checkIfTwoNumbersAddUpToK from './checkIfTwoNumbersAddUpToK'

describe('checkIfTwoNumbersAddUpToK', () => {
    it('should return true', () => {
        expect(checkIfTwoNumbersAddUpToK([10, 15, 3, 7], 17)).toBe(true)
        expect(checkIfTwoNumbersAddUpToK([1, 1, 1, 1, 1, 1, 1, 1], 2)).toBe(true)
        expect(checkIfTwoNumbersAddUpToK([10, 10], 20)).toBe(true)
        expect(
            checkIfTwoNumbersAddUpToK(
                [
                    1345320,
                    1234525,
                    2345433,
                    24354327,
                    23452,
                    234523425,
                    2345432,
                    5432345,
                    234543,
                    23454325
                ],
                26699760
            )
        ).toBe(true)
    })
    it('should return false', () => {
        expect(checkIfTwoNumbersAddUpToK([10, 15, 3, 7], 16)).toBe(false)
        expect(checkIfTwoNumbersAddUpToK([1], 16)).toBe(false)
        expect(checkIfTwoNumbersAddUpToK([1], 1)).toBe(false)
        expect(checkIfTwoNumbersAddUpToK([1, 1, 1, 1, 1, 1], 6)).toBe(false)
    })
})
