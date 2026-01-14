import HitCounter from './HitCounter'

describe('HitCounter', () => {
    let hitCounter: HitCounter

    beforeEach(() => {
        hitCounter = new HitCounter([
            new Date('05/29/1990').getTime(),
            new Date('10/16/1995').getTime(),
        ])
    })

    test('should not allow explicitly setting hits', () => {
        expect(() => (hitCounter.hits = [1, 2, 3])).toThrow()
    })

    describe('record', () => {
        test('should record a hit', () => {
            const now = new Date().getTime()
            hitCounter.record(now)
            expect(hitCounter.hits).toContain(now)
        })
    })

    describe('total', () => {
        test('should return total number of hits', () => {
            expect(hitCounter.total()).toBe(2)
        })
    })

    describe('range', () => {
        test('should throw an error', () => {
            expect(() => hitCounter.range(10, 1)).toThrow()
        })

        test('should return the number of hits that occurred in a range', () => {
            expect(
                hitCounter.range(
                    new Date('04/30/1992').getTime(),
                    new Date('12/25/1995').getTime(),
                ),
            ).toBe(1)

            expect(
                hitCounter.range(
                    new Date('04/30/1990').getTime(),
                    new Date('12/25/1995').getTime(),
                ),
            ).toBe(2)

            expect(
                hitCounter.range(
                    new Date('05/29/1990').getTime(),
                    new Date('10/16/1995').getTime(),
                ),
            ).toBe(2)
        })
    })
})
