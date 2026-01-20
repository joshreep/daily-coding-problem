export default function runningMedian(array: number[]): number[] {
  return array.reduce((prev, curr, idx, arr) => {
    const workingArray = arr.slice(0, idx + 1).sort((a, b) => a - b)
    const isEven = workingArray.length % 2 === 0

    if (isEven) {
      const value1 = workingArray[workingArray.length / 2 - 1]
      const value2 = workingArray[workingArray.length / 2]
      return [...prev, (value1 + value2) / 2]
    } else {
      return [...prev, workingArray[Math.floor(workingArray.length / 2)]]
    }

    return [...prev]
  }, [] as number[])
}
