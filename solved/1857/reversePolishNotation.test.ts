import reversePolishNotation from './reversePolishNotation'

test('it should evaluate simple expressions', () => {
    expect(reversePolishNotation([5, 3, '+'])).toBe(8)
})
test('it should evaluate complex expressions', () => {
    expect(reversePolishNotation([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'])).toBe(5)
})

