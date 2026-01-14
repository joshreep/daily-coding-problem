#! /usr/bin/env node

import times from 'lodash/times'
import collatzSequence from './collatz'

const n = process.argv[2]

let largestN = 0,
    largestSequence: number[] = []

times(+n, (index) => {
    index = index + 1
    const sequence = collatzSequence(index)
    if (sequence.length > largestSequence.length) {
        largestN = index
        largestSequence = sequence
    }
})

console.log(`largest collatzSequence: [${largestN}] with ${largestSequence.length} steps`)

process.exit()
