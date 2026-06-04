/**
 * Returns `true` if the egg broke, and `false` otherwise.
 */
export type TestDrop = (floor: number) => boolean

/**
 * Finds the minimum number of trial drops it will take, in the worst case,
 * to identify the floor that will cause an egg to break,
 * if dropped from that floor.
 *
 * @param N The number of eggs given to test with
 * @param k The number of floors in the building
 */
export function findLowestFloor(N: number, k: number, testDrop: TestDrop) {
  if (N === 1) {
    let testFloor = 1
    while (!testDrop(testFloor)) {
      testFloor++
    }
  }
}

export function findMinimumTrialDrops(N: number, k: number, eggsUsed = 0) {
  console.log(N, k, eggsUsed)
  if (N === 1) return k + eggsUsed
  if (k === 1) return eggsUsed + 1

  const t = (k + 1) / 2
  const s = Math.ceil(t) === t ? t : Math.ceil(t)
  return findMinimumTrialDrops(N - 1, Math.ceil((k + 1) / 2) - 1, eggsUsed + 1)
}
