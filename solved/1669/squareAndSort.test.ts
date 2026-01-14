import squareAndSort from './squareAndSort'

test('should square and sort', () => {
    expect(squareAndSort([-9, -2, 0, 2, 3])).toEqual([0, 4, 4, 9, 81])
    expect(squareAndSort([-9, -2, 0, 2, 3])).toEqual([0, 4, 4, 9, 81])
})
