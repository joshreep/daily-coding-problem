import findMinNumCoins from './findMinNumCoins'

test('should throw error if n is not an integer', () => {
    expect(() => findMinNumCoins(1.1)).toThrow()
})

test.each([
    [3, 16],
    [1, 25],
    [4, 85],
    [9, 99],
    [6, 24],
    [7, 49],
])('should return %i when given %i', (expected, given) => {
    expect(findMinNumCoins(given)).toBe(expected)
})
