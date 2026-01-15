import { expect, test } from 'vitest'
import findMajorityElement from './findMajorityElement'

const tests = [
  { arr: [1, 2, 1, 1, 3, 4, 0, 1, 1], expected: 1 },
  { arr: [1, 2, 3, 4], expected: null },
]

test.each(tests)('should return $expected when given $arr', ({ arr, expected }) => {
  expect(findMajorityElement(arr)).toBe(expected)
})

test('work!', () => {
  const test = tests[0]
  expect(findMajorityElement(test.arr)).toBe(test.expected)
})
