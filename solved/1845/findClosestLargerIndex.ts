function findClosestLargerIndex(arr: number[], idx: number): number | null {
  const targetValue = arr[idx]
  if (targetValue === undefined) throw new Error('out of bounds')

  for (let i = 1; i < getDistanceToBounds(arr, idx); i++) {
    if (arr[idx - i] > targetValue) return idx - i
    if (arr[idx + i] > targetValue) return idx + i
  }

  return null
}

function getDistanceToBounds(arr: number[], idx: number): number {
  if (idx > arr.length / 2) return idx
  else return arr.length - idx
}

export default findClosestLargerIndex
