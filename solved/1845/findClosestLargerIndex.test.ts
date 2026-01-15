import { expect, test } from 'vitest'
import findClosestLargerIndex from './findClosestLargerIndex'
const tests = [
  { arr: [4, 1, 3, 5, 6], idx: 0, expected: 3 },
  { arr: [4, 1, 3, 5, 6], idx: 4, expected: null },
  { arr: [4, 1, 3, 5, 6], idx: 2, expected: 3 },
  { arr: [4, 1, 3, 5, 6], idx: 1, expected: 0 },
]

test.each(tests)('should return $expected when given $arr and index $idx ', ({ arr, idx, expected }) => {
  expect(findClosestLargerIndex(arr, idx)).toBe(expected)
})
