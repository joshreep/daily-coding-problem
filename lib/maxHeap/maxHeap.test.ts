import { expect, test } from 'vitest'
import MaxHeap from './maxHeap'

const initialArray = [1, -15, 22, 40, 9, 91]

test('should create a max heap', () => {
  const expectedHeap = [91, 40, 22, -15, 9, 1]
  const maxHeap = new MaxHeap([...initialArray])
  expect(maxHeap.heap).toStrictEqual(expectedHeap)
})

test('should heapify only within the bounds', () => {
  const expectedHeap = [22, -15, 1, 40, 9, 91]
  const maxHeap = new MaxHeap(initialArray, 2)
  expect(maxHeap.heap).toStrictEqual(expectedHeap)
})
