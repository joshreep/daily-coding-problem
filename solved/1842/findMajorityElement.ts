function findMajorityElement<T extends string | number>(arr: T[]): T | null {
  const necessaryMajorityCount = Math.floor(arr.length / 2)
  const counts = {} as Record<T, number>

  for (const item of arr) {
    counts[item] = (counts[item] ?? 0) + 1
    if (counts[item] > necessaryMajorityCount) return item
  }

  return null
}

export default findMajorityElement
