import MaxHeap from '@/lib/maxHeap/maxHeap'

export default function heapSort(arr: number[]): number[] {
  const heap = new MaxHeap(arr)

  for (let i = heap.heap.length - 1; i > 0; i--) {
    heap.heapify(i)
    heap.swap(0, i)
  }

  return heap.heap
}
