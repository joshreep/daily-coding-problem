import { expect, test } from 'vitest'
import { findSmallerItemsToRightCount } from './problem'

const tests = [
  { arr: [3, 4, 9, 6, 1], expected: [1, 1, 2, 1, 0] },
  { arr: [], expected: [] },
  { arr: [1, 2, 3, 4, 5], expected: [0, 0, 0, 0, 0] },
  { arr: [5, 4, 3, 2, 1], expected: [4, 3, 2, 1, 0] },
  { arr: [1, 1, 1, 1, 1], expected: [0, 0, 0, 0, 0] },
]

test.each(tests)(
  'should return $expected when given $arr',
  ({ arr, expected }) => {
    expect(findSmallerItemsToRightCount(arr)).toStrictEqual(expected)
  },
)
