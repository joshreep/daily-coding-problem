import BitArray, { Bit } from './BitArray'

describe('BitArray', () => {
    let target: BitArray

    beforeEach(() => {
        target = new BitArray(8)
    })

    describe('constructor', () => {
        test('should initialize a new array', () => {
            expect(target.size).toBe(8)
        })
    })

    describe('set', () => {
        test('should fail if index is bad', () => {
            expect(() => target.set(-1, 1)).toThrow(
                'Index must be a positive integer. Instead received -1',
            )
            expect(() => target.set(10, 1)).toThrow(
                'Index must be less than array size (8). Instead received 10',
            )
        })

        test('should return a BitArray', () => {
            expect(target.set(1, 0)).toBeInstanceOf(BitArray)
        })
    })

    describe('get', () => {
        test('should fail if index is bad', () => {
            expect(() => target.get(-1)).toThrow(
                'Index must be a positive integer. Instead received -1',
            )
            expect(() => target.get(10)).toThrow(
                'Index must be less than array size (8). Instead received 10',
            )
        })

        test('should return value at index', () => {
            const scenarios: [number, Bit][] = [
                [4, 1],
                [3, 0],
            ]
            scenarios.forEach(([index, value]) => {
                target.set(index, value)
                expect(target.get(index)).toBe(value)
            })
        })
    })
})
