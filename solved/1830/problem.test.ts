import { expect, test } from 'vitest'
import { exists, type Board } from './problem'

const board: Board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]

const tests = [
  { word: 'ABCCED', exp: true },
  { word: 'SEE', exp: true },
  { word: 'ABCB', exp: false },
]

test.each(tests)('should return $exp when given $word', ({ exp, word }) => {
  expect(exists(board, word)).toBe(exp)
})
