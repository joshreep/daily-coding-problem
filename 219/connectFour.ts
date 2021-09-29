import times from 'lodash/times'
import cloneDeep from 'lodash/cloneDeep'
import { clone } from 'lodash'

export type PlayerColor = 'black' | 'red'
export type GridCell = PlayerColor | undefined
export type Grid<T = PlayerColor> = T[][]

export default class ConnectFour {
    constructor(
        blackPlayerName: string,
        redPlayerName: string,
        whoGoesFirst: PlayerColor = 'black',
    ) {
        this.players = {
            red: redPlayerName,
            black: blackPlayerName,
        }
        this.currentTurn = whoGoesFirst
        this.grid = [[], [], [], [], [], [], []]
        this.winnerAnnounced = false
    }

    players: {
        red: string
        black: string
    }
    grid: Grid
    currentTurn: PlayerColor
    winner?: PlayerColor
    winnerAnnounced: boolean

    announceWinner() {
        if (this.winner && !this.winnerAnnounced) {
            console.log(`We have a winner! Congratulations ${this.players[this.winner]}!`)
            this.winnerAnnounced = true
        }

        return this.winnerAnnounced
    }

    placeDisk(columnNumber: number) {
        if (this.winner) return this.announceWinner()

        this.validateDiskPlacement(columnNumber)
        this.grid[columnNumber].push(this.currentTurn)
        if (!this.checkForWinner()) this.toggleCurrentTurn()
    }

    checkForWinner() {
        if (
            this.winner ||
            this.checkForVerticalWinner() ||
            this.checkForHorizontalWinner() ||
            this.checkForDiagonalWinner()
        ) {
            return this.announceWinner()
        }

        return false
    }

    toggleCurrentTurn() {
        this.currentTurn = this.currentTurn === 'black' ? 'red' : 'black'
        console.log(`${this.currentTurn}'s turn`)
    }

    validateDiskPlacement(columnNumber: number) {
        if (columnNumber < 0 || columnNumber > 6) throw new Error('Invalid column number')

        if (this.grid[columnNumber].length >= 6)
            throw new Error('This slot already has 6 disks in it. Please choose a different slot')
    }

    checkForVerticalWinner(grid: Grid<GridCell> = this.grid) {
        if (this.winner) return true

        let currentColor: GridCell,
            count = 1

        return grid.some((column) => {
            if (column.length < 4) return false

            return column.some((row) => {
                if (row === currentColor) {
                    count++
                    if (count === 4) {
                        this.winner = row
                        if (this.winner) return true
                    }
                } else {
                    count = 1
                }
                currentColor = row
                return false
            })
        })
    }

    checkForHorizontalWinner(grid: Grid<GridCell> = this.grid) {
        if (this.winner) return true

        const invertedGrid = invertGrid(cloneDeep(grid))

        return this.checkForVerticalWinner(unFillGrid(invertedGrid))
    }

    checkForDiagonalWinner(grid: Grid<GridCell> = this.grid) {
        if (this.winner) return true

        const clonedGrid = cloneDeep(grid)

        const positivelyShiftedGrid = shiftGrid(clonedGrid, true)
        const negativelyShiftedGrid = shiftGrid(clonedGrid, false)

        const positivelyInvertedGrid = invertGrid(positivelyShiftedGrid)
        const negativelyInvertedGrid = invertGrid(negativelyShiftedGrid)

        return (
            this.checkForVerticalWinner(unFillGrid(positivelyInvertedGrid)) ||
            this.checkForVerticalWinner(unFillGrid(negativelyInvertedGrid))
        )
    }
}

export function shiftGrid(grid: Grid<GridCell>, reverse: boolean = false) {
    if (reverse) grid.reverse()

    grid.forEach((column, index) => {
        times(index, () => column.unshift(undefined))
    })

    if (reverse) grid.reverse()

    return grid
}

export function invertGrid(grid: Grid<GridCell>): Grid<GridCell> {
    const result: Grid<GridCell> = []
    const filledGrid = fillGrid(grid)

    filledGrid.forEach((column, columnIndex) => {
        column.forEach((row, rowIndex) => {
            if (!result[rowIndex]) result[rowIndex] = []
            result[rowIndex][columnIndex] = row
        })
    })

    return result
}

export function fillGrid<T = undefined>(grid: Grid<GridCell>, filler?: T) {
    const biggestColumn = getBiggestGridColumn(grid)

    return grid.map((column) => {
        const fillerArray = times(biggestColumn - column.length, () => filler)
        return [...column, ...fillerArray]
    })
}

export function unFillGrid(grid: Grid<GridCell>) {
    return grid.map((column) => column.filter((row) => row !== undefined))
}

export function validateGridDimensions(grid: Grid<GridCell>) {
    if (![6, 7].includes(grid.length)) throw new Error('Connect Four grids must be 6 x 7')

    const maxHeight = grid.length === 6 ? 7 : 6
    const biggestColumn = getBiggestGridColumn(grid)

    if (biggestColumn > maxHeight) throw new Error('Connect Four grids must be 6 x 7')
}

export function getBiggestGridColumn(grid: Grid<GridCell>) {
    return grid.reduce((previous, current) => Math.max(previous, current.length), 0)
}
