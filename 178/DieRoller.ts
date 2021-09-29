export default class DieRoller {
    constructor(precedingValue: number, succeedingValue: number) {
        validateNumberInRange(precedingValue, 1, 6)
        validateNumberInRange(succeedingValue, 1, 6)

        this.precedingValue = precedingValue
        this.succeedingValue = succeedingValue
        this.previousRoll = this.currentRoll = this.rollCount = 0
    }

    precedingValue: number
    succeedingValue: number
    previousRoll: number
    currentRoll: number
    rollCount: number

    static rollDie() {
        return randomNumber(1, 6)
    }

    recordRollDie() {
        this.previousRoll = this.currentRoll
        this.currentRoll = DieRoller.rollDie()
        ++this.rollCount

        return this
    }

    whatShouldYouPay() {
        this.previousRoll = this.currentRoll = this.rollCount = 0

        const doWork = (): number => {
            console.log(
                this.precedingValue,
                this.previousRoll,
                this.succeedingValue,
                this.currentRoll,
            )
            if (
                this.previousRoll !== this.precedingValue &&
                this.currentRoll !== this.succeedingValue
            ) {
                this.recordRollDie()
                return doWork()
            }

            return this.rollCount
        }

        return doWork()
    }
}

export function validateNumberInRange(value: number, min: number, max: number) {
    if (value < min || value > max)
        throw new RangeError('provided value falls outside of given range')
}

export function randomNumber(min: number, max: number) {
    if (min > max)
        throw new Error(`min value should be less than max value.  ${min} is not less than ${max}`)

    return Math.floor(Math.random() * max) + min
}
