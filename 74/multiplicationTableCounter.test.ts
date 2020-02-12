import 'core-js'

import multiplicationTableCounter, {
    multiplicationTableGenerator,
} from './multiplicationTableCounter'

describe('multiplicationTableCounter', () => {
    it('should return a count of items in the matrix', () => {
        expect(multiplicationTableCounter(6, 12)).toEqual(4)
        expect(multiplicationTableCounter(2, 2)).toEqual(2)
        expect(multiplicationTableCounter(4, 6)).toEqual(2)
    })
})

describe('multiplicationTableGenerator', () => {
    it('should generate a multiplication table', () => {
        expect(multiplicationTableGenerator(1)).toStrictEqual([[1]])
        expect(multiplicationTableGenerator(2)).toStrictEqual([
            [1, 2],
            [2, 4],
        ])
        expect(multiplicationTableGenerator(3)).toStrictEqual([
            [1, 2, 3],
            [2, 4, 6],
            [3, 6, 9],
        ])
        expect(multiplicationTableGenerator(6)).toStrictEqual([
            [1, 2, 3, 4, 5, 6],
            [2, 4, 6, 8, 10, 12],
            [3, 6, 9, 12, 15, 18],
            [4, 8, 12, 16, 20, 24],
            [5, 10, 15, 20, 25, 30],
            [6, 12, 18, 24, 30, 36],
        ])
    })
})
