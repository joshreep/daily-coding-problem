import { expect, test } from 'vitest'
import findMinOfRotatedArr from './problem'

const tests = [
  { arr: [5, 7, 10, 3, 4], expected: 3 },
  { arr: [7], expected: 7 },
  { arr: [8, 7], expected: 7 },
  { arr: [8, 9, 7], expected: 7 },
  { arr: [21, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], expected: 8 },
  { arr: [20, 21, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], expected: 8 },
  { arr: [19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], expected: 8 },
  { arr: [18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], expected: 8 },
  { arr: [17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 15, 16], expected: 8 },
  { arr: [16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 15], expected: 8 },
  { arr: [15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14], expected: 8 },
  { arr: [14, 15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13], expected: 8 },
  { arr: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], expected: 8 },
  { arr: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 8], expected: 8 },
]

test.each(tests)(
  'should return the min ($expected) when given $arr',
  ({ arr, expected }) => {
    expect(findMinOfRotatedArr(arr)).toBe(expected)
  },
)
