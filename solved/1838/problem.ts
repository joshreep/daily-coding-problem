export function findSmallerItemsToRightCount(arr: number[]): number[] {
  const result = Array.from<number>({ length: arr.length }).fill(0)

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) result[i]++
    }
  }

  return result
}
