#! /usr/bin/env node

import DieRoller from './DieRoller'

const game1 = {
    precedingValue: 5,
    succeedingValue: 6,
}

const game2 = {
    precedingValue: 5,
    succeedingValue: 5,
}

const game1DieRoller = new DieRoller(game1.precedingValue, game1.succeedingValue)
const game2DieRoller = new DieRoller(game2.precedingValue, game2.succeedingValue)

// console.log(game1DieRoller.whatShouldYouPay())

// function times<T>(n: number, iteratee: (index: number) => T) {
//     let index = 0
//     const result: T[] = []

//     while (++index < n) {
//         result[index] = iteratee(index)
//     }

//     return result
// }
