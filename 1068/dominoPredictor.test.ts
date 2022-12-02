import dominoPredictor from './dominoPredictor'

test('should correctly determine the orientation of the dominoes once all have fallen', () => {
    expect(dominoPredictor('.L.R....L')).toBe('LL.RRRLLL')
    expect(dominoPredictor('..R...L.L')).toBe('..RR.LLLL')
    expect(dominoPredictor('R.......L')).toBe('RRRR.LLLL')
})
