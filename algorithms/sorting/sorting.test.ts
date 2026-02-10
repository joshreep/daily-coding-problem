import { expect, test } from 'vitest'
import bubbleSort from './bubbleSort'
import heapSort from './heapSort'
import insertionSort from './insertionSort'
import mergeSort from './mergeSort'
import quickSort, { quickSortInPlace } from './quickSort'
import selectionSort from './selectionSort'

type SortAlg = (arr: number[]) => number[]

const comparisonSortingAlgorithms: [string, SortAlg][] = [
  ['bubbleSort', bubbleSort],
  ['heapSort', heapSort],
  ['insertionSort', insertionSort],
  ['mergeSort', mergeSort],
  ['quickSort', quickSort],
  ['quickSortInPlace', quickSortInPlace],
  ['selectionSort', selectionSort],
]

const size = 10000
// const size = 10

const sortedList = createSortedArray(size)
const unsortedList = shuffleArray(createSortedArray(size))

test.each(comparisonSortingAlgorithms)(
  '%s should sort a list',
  (_, sortAlg) => {
    expect(sortAlg([...unsortedList])).toStrictEqual(sortedList)
  },
)

function shuffleArray(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    const randIdx = Math.floor(Math.random() * i)
    ;[arr[i], arr[randIdx]] = [arr[randIdx], arr[i]]
  }

  return arr
}

function createSortedArray(length: number) {
  return Array.from({ length }, (v, k) => k + 1)
}
