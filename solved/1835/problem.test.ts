import { expect, test } from 'vitest'
import runningMedian from './problem'

const tests = [
  { arr: [2, 1, 5, 7, 2, 0, 5], expected: [2, 1.5, 2, 3.5, 2, 2, 2] },
  { arr: [8, 7, 6, 5, 4, 3, 2, 1], expected: [8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5] },
  { arr: [9], expected: [9] },
  { arr: [9, 10], expected: [9, 9.5] },
  {
    arr: [8, 1, 7, 2, 6, 3, 5, 4],
    expected: [8, 4.5, 7, 4.5, 6, 4.5, 5, 4.5],
  },
]

test.each(tests)(
  'should return running median $expected when given $arr',
  ({ arr, expected }) => {
    expect(runningMedian(arr)).toStrictEqual(expected)
  },
)
