type Idx = number
type HeapItem = (typeof MaxHeap.prototype.heap)[number]

export default class MaxHeap {
  heap: number[]

  constructor(initialArray: number[] = [], endBounds = initialArray.length) {
    this.heap = initialArray
    this.heapify(endBounds)
  }

  private getParentIndex(i: number): Idx {
    return Math.floor((i - 1) / 2)
  }
  private getLeftChildIndex(i: number): Idx {
    return 2 * i + 1
  }
  private getRightChildIndex(i: number): Idx {
    return this.getLeftChildIndex(i) + 1
  }
  private getLargestChildIndex(
    i: number,
    endBounds = this.heap.length - 1,
  ): Idx | null {
    const leftChildIndex = this.getLeftChildIndex(i)
    const rightChildIndex = this.getRightChildIndex(i)
    const leftChild =
      leftChildIndex > endBounds ? null : this.heap[leftChildIndex]
    const rightChild =
      rightChildIndex > endBounds ? null : this.heap[rightChildIndex]

    if (!leftChild && !rightChild) return null
    if (!rightChild) return leftChildIndex
    if (!leftChild) return rightChildIndex
    if (leftChild > rightChild) return leftChildIndex
    return rightChildIndex
  }

  private getLastNonLeafNodeIndex(endBounds = this.heap.length - 1): Idx {
    return Math.floor((endBounds - 1) / 2)
  }

  swap(i: number, j: number): void {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  heapify(endBounds = this.heap.length - 1): number[] {
    let nonLeafNode = this.getLastNonLeafNodeIndex(endBounds)
    let currentIndex = nonLeafNode

    while (nonLeafNode >= 0 && currentIndex < endBounds) {
      const largestChildIndex = this.getLargestChildIndex(
        currentIndex,
        endBounds,
      )

      if (largestChildIndex == null) {
        currentIndex = --nonLeafNode
        continue
      }

      if (largestChildIndex > endBounds) break

      if (this.heap[currentIndex] > this.heap[largestChildIndex]) {
        currentIndex = --nonLeafNode
        continue
      }

      this.swap(currentIndex, largestChildIndex)

      currentIndex = largestChildIndex
    }

    return this.heap
  }
}
