import { expect, test } from 'vitest'
import fairCoinFlipRounds from './problem'

// 100 -> 50 -> 25 -> 12 -> 6 -> 3 -> 2 -> 1
// 12395 -> 6197 -> 3099 -> 1549 -> 775 -> 387 -> 194 -> 97 -> 49 -> 24 -> 12 -> 6 -> 3 -> 1

const tests = [
  { n: 8, expected: 3 },
  { n: 2, expected: 1 },
  { n: 1, expected: 0 },
  { n: 20, expected: 4 },
  { n: 100, expected: 7 },
  { n: 12395, expected: 13 },
]

test.each(tests)(
  'should take $expected turns to reach 1 coin left when given $n coins',
  ({ n, expected }) => {
    expect(fairCoinFlipRounds(n)).toBe(expected)
  },
)
