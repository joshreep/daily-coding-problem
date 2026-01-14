import { expect, test } from 'vitest'
import SparseArray from './SparseArray'

const largeSparseArray = Array.from({ length: 1000000 }).fill(0)
largeSparseArray[50] = 'hello'
largeSparseArray[500] = 'there'
largeSparseArray[5000] = 'world'

function setup() {
  const sparseArray = new SparseArray(largeSparseArray, largeSparseArray.length)

  return { sparseArray }
}

test('should create a sparse array at least 100x smaller than the original', () => {
  const {sparseArray} = setup()
  const largeSparseArraySize = SparseArray.getByteSize(largeSparseArray)
  const sparseArraySize = SparseArray.getByteSize(sparseArray)
  console.log(largeSparseArraySize, sparseArraySize)
  expect(largeSparseArraySize/sparseArraySize).toBeGreaterThan(100)
})

test('should be able to set a value in the sparse array', () => {
  const {sparseArray} = setup()
  sparseArray.set(3000, 'Andre')
  expect(sparseArray.entries[3000]).toBe('Andre')
})

test('should be able to set 0 in the sparse array', () => {
  const {sparseArray} = setup()
  sparseArray.set(500, 0)
  expect(sparseArray.entries[3000]).toBe(undefined)

})

test('should throw an error when setting an item outside the size', () => {
  const {sparseArray} = setup()

  expect(() => sparseArray.set(Number.MAX_SAFE_INTEGER, 'this won\'t work')).toThrowError('out of bounds')
})

test('should be able to get the item at an index', () => {
  const {sparseArray} = setup()

  expect(sparseArray.get(50)).toBe('hello')
  expect(sparseArray.get(51)).toBe(0)
})

test('should throw when getting item outside size', () => {
  const {sparseArray} = setup()

  expect(() => sparseArray.get(Number.MAX_SAFE_INTEGER)).toThrowError('out of bounds')

})
