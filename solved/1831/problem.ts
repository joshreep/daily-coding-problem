export function problem(arr: number[]): number {
  let currentSum = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    if (currentSum + 1 < arr[i + 1]) {
      return currentSum + 1
    }
  }

  return currentSum + 1
}
