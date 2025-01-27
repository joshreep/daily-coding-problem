import findSmallestNumberOfSquaredInts from './findSmallestNumberOfSquaredInts'

test('should throw if non integer is passed in', () => {
    expect(() => findSmallestNumberOfSquaredInts(1.1)).toThrow()
})

test('should not throw when int passed in', () => {
    expect(() => findSmallestNumberOfSquaredInts(1)).not.toThrow()
})

test.each([
    [1, 1],
    [13, 2],
    [27, 3],
    [3, 3],
    [4, 1],
    [104, 2],
    [100, 1],
    [500, 2],
    [1000, 5],
    [10000, 1],
    [100000, 2],
    [1000000, 1],
])('when given %i should return %i', (given, expected) => {
    expect(findSmallestNumberOfSquaredInts(given)).toBe(expected)
})
