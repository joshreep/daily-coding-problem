export default function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]) {
  let result = []
  let leftIdx = 0
  let rightIdx = 0

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx])
      leftIdx++
    } else {
      result.push(right[rightIdx])
      rightIdx++
    }
  }

  return [...result, ...left.slice(leftIdx), ...right.slice(rightIdx)]
}
