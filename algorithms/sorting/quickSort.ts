export default function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

export function quickSortInPlace(
  arr: number[],
  low = 0,
  high = arr.length - 1,
): number[] {
  if (low < high) {
    const pi = partition(arr, low, high)
    quickSortInPlace(arr, low, pi - 1)
    quickSortInPlace(arr, pi + 1, high)
  }
  return arr
}

/**
 * destructively swaps two elements in an array
 */
function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * partitions the array around a pivot
 * @param arr array to partition
 * @param low lower bounds index of the partition
 * @param high upper bounds index of the partition
 */
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]

  let i = low - 1

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++
      swap(arr, i, j)
    }
  }

  swap(arr, i + 1, high)
  return i + 1
}
