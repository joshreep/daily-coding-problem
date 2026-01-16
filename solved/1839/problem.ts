function findMinOfRotatedArr(arr: number[]): number {
  const firstVal = arr[0]

  if (arr.length === 1) return firstVal
  if (firstVal < arr[arr.length - 1]) return firstVal

  const midPointIdx = Math.floor(arr.length / 2)
  const midPointVal = arr[midPointIdx]

  if (firstVal > midPointVal) {
    return findMinOfRotatedArr(arr.slice(1, midPointIdx + 1))
  } else if (firstVal < midPointVal) {
    return findMinOfRotatedArr(arr.slice(midPointIdx + 1))
  }

  throw new Error('[malformed array] duplicates exist')
}

export default findMinOfRotatedArr
