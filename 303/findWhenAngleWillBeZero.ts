#! /usr/bin/env node

import findClockAngle from './findClockAngle'

const result = findWhenAngleWillBeZero(1)

result.forEach((time) => {
    console.log(time)
})

console.log(JSON.stringify(result))

process.exit()

export default function findWhenAngleWillBeZero(marginOfError: number = 0) {
    const result: string[] = []

    let hours = 1,
        minutes = 0

    while (hours <= 12) {
        const time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
        const angle = findClockAngle(time, false)

        if (angle <= marginOfError) {
            result.push(time)
            console.log(`✅  ${time} --- ${angle}°`)
        } else {
            console.log(`❌  ${time} --- ${angle}°`)
        }

        if (minutes === 59) {
            hours++
            minutes = 0
        } else {
            minutes++
        }
    }

    return result
}
