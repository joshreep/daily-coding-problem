import { expect, test } from 'vitest'
import { problem } from './problem'

const tests = [
  { arr: [1, 2, 3, 10], exp: 7 },
  { arr: [1, 2, 3, 10, 100], exp: 7 },
  { arr: [1, 2, 3, 4, 10], exp: 21 },
  { arr: [1, 2, 10], exp: 4 },
  { arr: [1, 3, 5, 7], exp: 2 },
  { arr: [1, 2, 3, 5, 7], exp: 19 },
]

test.each(tests)('should return $exp when given $arr', ({ arr, exp }) => {
  expect(problem(arr)).toBe(exp)
})
