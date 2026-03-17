/* prettier-ignore */
type AlphabetChar = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type Board = AlphabetChar[][]

type Coordinate = [number, number]

const DIRECTIONS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
] as const

export function exists(board: Board, word: string): boolean {
  let wordIndex = 0

  for (const [yAxis, row] of board.entries()) {
    for (const [xAxis, char] of row.entries()) {
      if (char !== word[wordIndex]) continue

      if (traverseWord(board, word, [yAxis, xAxis])) return true
    }
  }

  return false
}

function traverseWord(
  board: Board,
  word: string,
  pos: Coordinate,
  wordIdx: number = 0,
  usedCoordinates: Coordinate[] = [pos],
) {
  if (wordIdx + 1 === word.length) return true

  for (const dir of DIRECTIONS) {
    const nextPos: Coordinate = [pos[0] + dir[0], pos[1] + dir[1]]
    if (coordsIncludesCoord(usedCoordinates, nextPos)) continue

    const charAtNextPos = board[nextPos[0]]?.[nextPos[1]]
    if (charAtNextPos !== word[wordIdx + 1]) continue

    return traverseWord(board, word, nextPos, wordIdx + 1, [
      ...usedCoordinates,
      nextPos,
    ])
  }

  return false
}

function coordsIncludesCoord(coords: Coordinate[], coord: Coordinate) {
  return coords.some((curr) => curr[0] === coord[0] && curr[1] === coord[1])
}
