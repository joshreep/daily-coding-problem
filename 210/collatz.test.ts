import times from 'lodash/times'
import random from 'lodash/random'

import collatzSequence from './collatz'

describe('collatzSequence', () => {
    it('should end in 1', () => {
        times(1000, () => {
            const sequence = collatzSequence(random(1, 1000000))
            expect(sequence[sequence.length - 1]).toBe(1)
        })
    })
})
