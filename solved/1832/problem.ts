export default function fairCoinFlipRounds(
  n: number,
  turnsElapsed = 0,
): number {
  if (n === 1) return turnsElapsed

  return fairCoinFlipRounds(
    turnsElapsed % 2 === 0 ? Math.floor(n / 2) : Math.ceil(n / 2),
    turnsElapsed + 1,
  )
}
