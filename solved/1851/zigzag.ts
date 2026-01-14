function zigzag(string: string, k: number): string {
  const cols = string.length
  const rows = Math.min(k, cols)
  const matrix = makeMatrix(cols, rows, ' ')
  const chars = string.split('')

  let descending = true
  let currentRow = 0

/** come back to all this */
  chars.forEach((char, idx) => {
    matrix[currentRow][idx] = char

    currentRow = descending ? Math.min(currentRow + 1, rows - 1) : Math.max(currentRow - 1, 0)
    if (currentRow %(k-1) === 0) descending = !descending
  })

  return stringifyMatrix(matrix)
}

function makeMatrix<T>(cols: number, rows: number, initialValue: T): T[][] {
  return Array.from<T>({length: rows}).map(() => Array.from<T>({length: cols}).fill(initialValue))
}

function stringifyMatrix(matrix: string[][]) {
  const stringifiedRows = matrix.map((row) => row.join('').trimEnd())
  const stringifiedMatrix = stringifiedRows.join('\n')
  return stringifiedMatrix
}


export default zigzag
