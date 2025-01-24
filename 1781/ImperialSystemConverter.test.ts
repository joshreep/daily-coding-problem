import ImperialSystemConverter from './ImperialSystemConverter'

test('should convert inches to feet', () => {
    const converter = new ImperialSystemConverter()
    expect(converter.convertUnit(24, 'inch', 'foot')).toBe(2)
})

test('should convert miles to inches', () => {
    const converter = new ImperialSystemConverter()
    expect(converter.convertUnit(2, 'mile', 'inch')).toBe(126720)
})

test('should have the ability to add new units', () => {
    const converter = new ImperialSystemConverter()
    converter.addUnit({ name: 'hand', abbreviation: 'hh', numberOfFeet: 1 / 3 })

    expect(converter.convertUnit(4, 'hand', 'mile')).toBe((4 * (1 / 3)) / 5280)
})
