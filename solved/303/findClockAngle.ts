export default function findClockAngle(time: string, round: boolean = true): number {
    const timePieces = time.split(':')
    const hours = +timePieces[0]
    const minutes = +timePieces[1]
    const seconds = +timePieces[2] || 0

    validateTime(hours, minutes, seconds, time)

    const minutesAngle = convertToDegrees(minutes, 60)
    const hoursAngle = convertToDegrees(hours, 12) + minutesAngle / 12

    if (round) return Math.round(Math.abs(minutesAngle - hoursAngle))

    return Math.abs(minutesAngle - hoursAngle)
}

function convertToDegrees(numerator: number, denominator: number) {
    if (numerator === denominator) return 0

    return (numerator / denominator) * 360
}

function validateTime(hours: number, minutes: number, seconds: number, time: string) {
    if (
        isNaN(hours) ||
        isNaN(minutes) ||
        isNaN(seconds) ||
        !inRange(hours, 1, 12) ||
        !inRange(minutes, 0, 59) ||
        !inRange(seconds, 0, 59)
    ) {
        throwError(time)
    }
}

function inRange(value: number, min: number, max: number) {
    return value >= min && value <= max
}

function throwError(time: string, error?: string) {
    throw new Error(error ?? `The given time, "${time}", is not in the format "hh:mm"`)
}
