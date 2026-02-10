export default function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    arr[minIndex] = arr[i]
    arr[i] = min
  }

  return arr
}
