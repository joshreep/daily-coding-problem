import DieRoller, { validateNumberInRange, randomNumber } from './DieRoller'
import times from 'lodash/times'

describe('DieRoller', () => {
    let dieRoller: DieRoller

    beforeEach(() => {
        dieRoller = new DieRoller(5, 6)
    })

    describe('constructor', () => {
        test('should throw if constructor values are not in range', () => {
            expect(() => new DieRoller(0, 6)).toThrow()
            expect(() => new DieRoller(1, 7)).toThrow()
        })

        test('should construct itself', () => {
            expect(dieRoller.precedingValue).toEqual(5)
            expect(dieRoller.succeedingValue).toEqual(6)
            expect(dieRoller.previousRoll).toEqual(0)
            expect(dieRoller.currentRoll).toEqual(0)
            expect(dieRoller.rollCount).toEqual(0)
        })
    })

    describe('DieRoller.rollDie()', () => {
        test('should return a random number between 1 and 6', () => {
            times(100, () => {
                const actual = DieRoller.rollDie()
                expect(actual).toBeGreaterThanOrEqual(1)
                expect(actual).toBeLessThanOrEqual(6)
            })
        })
    })

    describe('DieRoller.recordRollDie()', () => {
        test('should set currentRoll to previousRoll', () => {
            const curr1 = dieRoller.recordRollDie().currentRoll
            const prev2 = dieRoller.recordRollDie().previousRoll

            expect(prev2).toEqual(curr1)
        })

        test('should set currentRoll to new roll', () => {
            dieRoller.recordRollDie()
            expect(dieRoller.currentRoll).toBeGreaterThanOrEqual(1)
            expect(dieRoller.currentRoll).toBeLessThanOrEqual(6)
        })

        test('should increment rollCount', () => {
            times(10, (index) => {
                expect(dieRoller.recordRollDie().rollCount).toEqual(index + 1)
            })
        })

        test('should return self', () => {
            expect(dieRoller.recordRollDie()).toBeInstanceOf(DieRoller)
        })
    })

    describe('DieRoller.whatShouldYouPay()', () => {
        test.skip('should stop when previousRoll === precedingValue', () => {
            dieRoller.whatShouldYouPay()
            expect(dieRoller.precedingValue).toEqual(dieRoller.previousRoll)
        })

        test.todo('should stop when currentRoll === succeedingValue')

        test.skip('should return rollCount', () => {
            expect(dieRoller.whatShouldYouPay()).toBeGreaterThanOrEqual(2)
        })
    })
})

describe('validateNumberInRange()', () => {
    test('should throw if value is not in range', () => {
        expect(() => validateNumberInRange(5, 10, 20)).toThrow()
    })

    test('should do nothing if value is in range', () => {
        const actual = () => validateNumberInRange(5, 1, 6)
        expect(actual).not.toThrow()
        expect(actual()).toBeUndefined()
    })
})

describe('randomNumber', () => {
    test('should throw if min is greater than max', () => {
        expect(() => randomNumber(10, 5)).toThrow()
    })

    test('should return random number within the given range', () => {
        times(100, () => {
            const actual = randomNumber(1, 6)
            expect(actual).toBeGreaterThanOrEqual(1)
            expect(actual).toBeLessThanOrEqual(6)
        })
    })
})
