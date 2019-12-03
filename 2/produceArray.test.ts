import produceArray from './produceArray'

describe('produceArray', () => {
    it('should produce an array of products excluding index', () => {
        expect(produceArray([1, 2, 3, 4, 5])).toStrictEqual<number[]>([120, 60, 40, 30, 24])
        expect(produceArray([3, 2, 1])).toStrictEqual<number[]>([2, 3, 6])
        expect(produceArray([2, 2, 2, 2])).toStrictEqual<number[]>([8, 8, 8, 8])
    })
})
