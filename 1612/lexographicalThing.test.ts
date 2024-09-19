import Parser from './lexographicalThing'

test('should return 1', () => {
    const parser = new Parser(`cba
daf
ghi`)
    expect(parser.getNumberOfColumnsToRemove()).toBe(1)
})

test('should return 0', () => {
    const matrix = `abcdef`
    expect(new Parser(matrix).getNumberOfColumnsToRemove()).toBe(0)
})

test('should return 3', () => {
    const matrix = `zyx
    wvu
    tsr`
    expect(new Parser(matrix).getNumberOfColumnsToRemove()).toBe(3)
})
