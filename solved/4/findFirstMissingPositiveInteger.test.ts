import findFirstMissingPositiveInteger from './findFirstMissingPositiveInteger'

describe('findFirstMissingPositiveInteger', () => {
    it('should return the first missing positive integer in linear time and constant space', () => {
        expect(findFirstMissingPositiveInteger([3, 4, -1, 1])).toBe(2)
        expect(findFirstMissingPositiveInteger([1, 2, 0])).toBe(3)
        
        expect(findFirstMissingPositiveInteger([1, 2, 0, 1])).toBe(3)
        expect(findFirstMissingPositiveInteger([1, 2, 0, 1, 2, -1, -100])).toBe(3)
    })
})
