import { expect, test } from 'vitest'
import { findMinimumTrialDrops } from './problem'

const tests = [
  { N: 1, k: 5, expected: 5 },
  { N: 2, k: 5, expected: 3 },
  { N: 3, k: 5, expected: 3 },
  { N: 1, k: 10, expected: 10 },
  { N: 2, k: 10, expected: 6 },
  { N: 3, k: 10, expected: 4 },
  { N: 5, k: 10, expected: 4 },
  { N: 5, k: 20, expected: 5 },
  { N: 5, k: 17, expected: 5 },
]

test.each(tests)(
  'should return $expected when given $N eggs and $k floors',
  ({ N, k, expected }) => {
    expect(findMinimumTrialDrops(N, k)).toBe(expected)
  },
)
