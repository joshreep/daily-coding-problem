export default class Parser {
    private _grid: string[][]

    constructor(grid: string) {
        this._grid = parseGridStringToArrays(grid)
    }

    getNumberOfColumnsToRemove() {
        let numRemovedRows = 0

        for (let columnNum = 0; columnNum < this._grid[0].length; columnNum++) {
            if (this._grid.every((row, rowNum, arr) => row[columnNum] > (arr[rowNum - 1]?.[columnNum] ?? ''))) {
                continue
            }
            numRemovedRows++
        }

        return numRemovedRows
    }
}

function parseGridStringToArrays(grid: string) {
    return grid.split('\n').map((row) => row.split(''))
}
