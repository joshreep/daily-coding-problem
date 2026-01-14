import PerfectNumberFinder from './perfectNumberFinder'

test('should find perfect numbers', () => {
    expect(PerfectNumberFinder.find(1)).toBe(19)
    expect(PerfectNumberFinder.find(2)).toBe(28)
    expect(PerfectNumberFinder.find(3)).toBe(37)
    expect(PerfectNumberFinder.find(10)).toBe(109)
    expect(PerfectNumberFinder.find(100)).toBe(1423)
    expect(PerfectNumberFinder.find(1000)).toBe(100036)
})
