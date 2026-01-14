import findClockAngle from './findClockAngle'
describe('clockAngle', () => {
    test('should throw an error if time format is not correct', () => {
        expect(() => findClockAngle('00:00')).toThrowError()
        expect(() => findClockAngle('13:00')).toThrowError()
        expect(() => findClockAngle('12:60')).toThrowError()
        expect(() => findClockAngle('foo:bar')).toThrowError()
        expect(() => findClockAngle('10')).toThrowError()
        expect(() => findClockAngle(':10')).toThrowError()
    })

    test('should return proper angles', () => {
        expect(findClockAngle('12:00')).toBe(0)
        expect(findClockAngle('03:00')).toBe(90)
        expect(findClockAngle('06:00')).toBe(180)
        expect(findClockAngle('09:00')).toBe(270)
        expect(findClockAngle('06:30')).toBe(15)
        expect(findClockAngle('01:10')).toBe(25)
        expect(findClockAngle('11:59')).toBe(6)
    })
})

// minutes = 354
// hours = 359.5
