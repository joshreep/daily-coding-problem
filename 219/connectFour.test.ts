import ConnectFour, {
    invertGrid,
    GridCell,
    Grid,
    validateGridDimensions,
    fillGrid,
    shiftGrid,
} from './connectFour'

describe('ConnectFour', () => {
    let game: ConnectFour, logSpy: jest.SpyInstance<void, [any?, ...any[]]>

    beforeEach(() => {
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    })

    afterEach(() => {
        logSpy.mockRestore()
    })

    describe('constructor()', () => {
        beforeEach(() => {
            game = new ConnectFour('jim', 'dale')
        })

        it('should set players', () => {
            expect(game.players.black).toBe('jim')
            expect(game.players.red).toBe('dale')
        })

        it('should set currentTurn', () => {
            game = new ConnectFour('jim', 'dale', 'red')
            expect(game.currentTurn).toBe('red')
        })
    })

    describe('announceWinner()', () => {
        beforeEach(() => {
            game = new ConnectFour('jim', 'dale')
        })

        it('should return true if there is a winner', () => {
            game.winner = 'black'
            expect(game.announceWinner()).toBe(true)
        })

        it('should log the winner results', () => {
            game.winner = 'red'
            game.announceWinner()
            expect(logSpy).toHaveBeenCalledTimes(1)
            expect(logSpy).toHaveBeenCalledWith(
                `We have a winner! Congratulations ${game.players[game.winner]}!`,
            )
        })

        it('should set winnerAnnounced to true', () => {
            game.winner = 'black'
            expect(game.winnerAnnounced).toBe(false)
            game.announceWinner()
            expect(game.winnerAnnounced).toBe(true)
        })

        it('should return false if no winner', () => {
            expect(game.announceWinner()).toBe(false)
        })
    })

    describe('toggleCurrentTurn()', () => {
        it('should toggle the current turn', () => {
            const game = new ConnectFour('jim', 'dale')
            expect(game.currentTurn).toBe('black')

            game.toggleCurrentTurn()
            expect(game.currentTurn).toBe('red')

            game.toggleCurrentTurn()
            expect(game.currentTurn).toBe('black')
        })
    })

    describe('validateDiskPlacement()', () => {
        beforeEach(() => {
            game = new ConnectFour('jim', 'dale')
        })

        it('should throw if columnNumber is outside of the bounds', () => {
            expect(() => game.validateDiskPlacement(-1)).toThrowError()
            expect(() => game.validateDiskPlacement(0)).not.toThrowError()
            expect(() => game.validateDiskPlacement(6)).not.toThrowError()
            expect(() => game.validateDiskPlacement(7)).toThrowError()
        })

        it('should throw if column is full', () => {
            expect(() => game.validateDiskPlacement(0)).not.toThrowError()
            game.grid = [['black', 'red', 'red', 'red', 'black', 'red'], [], [], [], [], [], []]
            expect(() => game.validateDiskPlacement(0)).toThrowError()
        })
    })

    describe('checkForVerticalWinner()', () => {
        beforeEach(() => {
            game = new ConnectFour('jim', 'dale')
        })

        it('should return true if there is already a winner ', () => {
            game.winner = 'red'
            expect(game.checkForVerticalWinner()).toBe(true)
        })

        it('should return false if not enough chips in column', () => {
            game.grid = [['black', 'black', 'black']]
            expect(game.checkForVerticalWinner()).toBe(false)
            expect(game.winner).toBeUndefined()
        })

        it('should return false if no winner vertically', () => {
            game.grid = [
                ['black', 'red'],
                ['black', 'red'],
                ['black', 'red'],
                ['black', 'red'],
            ]
            expect(game.checkForVerticalWinner()).toBe(false)
            expect(game.winner).toBeUndefined()
        })

        it('should return true if there is a winner vertically', () => {
            game.grid = [['black', 'red', 'red', 'red', 'red']]
            expect(game.checkForVerticalWinner()).toBe(true)
            expect(game.winner).toBe('red')
        })
    })

    describe('checkForHorizontalWinner()', () => {
        beforeEach(() => {
            game = new ConnectFour('jim', 'dale')
        })

        it('should return true if there is already a winner ', () => {
            game.winner = 'red'
            expect(game.checkForHorizontalWinner()).toBe(true)
        })

        it('should return false if no winner horizontally', () => {
            game.grid = [
                ['black', 'black', 'black', 'black'],
                ['red', 'red', 'red', 'red'],
                ['black', 'black', 'black', 'black'],
                ['red', 'red', 'red', 'red'],
                ['black', 'black', 'black', 'black'],
                ['red', 'red', 'red', 'red'],
                ['black', 'black', 'black', 'black'],
            ]
            expect(game.checkForHorizontalWinner()).toBe(false)
        })

        it('should return true if there is a winner horizontally', () => {
            game.grid = [
                ['black'],
                ['black', 'red'],
                ['black', 'red', 'black'],
                ['red', 'black', 'black'],
                ['black', 'red', 'black'],
                ['black', 'red', 'black'],
                ['black', 'red'],
            ]
            expect(game.checkForHorizontalWinner()).toBe(true)
        })
    })

    describe('checkForDiagonalWinner()', () => {
        beforeEach(() => {
            game = new ConnectFour('jim', 'dale')
        })

        it('should return true if there is already a winner', () => {
            game.winner = 'black'
            expect(game.checkForDiagonalWinner()).toBe(true)
        })

        it('should return false if there is no winner diagonally', () => {
            game.grid = [
                ['red', 'red', 'red', 'red'],
                ['black', 'black', 'red', 'black'],
                ['black', 'black', 'red'],
                ['black', 'black', 'red', 'black'],
                ['black'],
                [],
                [],
            ]
            expect(game.checkForDiagonalWinner()).toBe(false)
        })

        it('should return true if there is a winner diagonally (positively)', () => {
            game.grid = [
                ['red', 'black', 'red'],
                ['black', 'red', 'black', 'red'],
                ['red', 'black', 'red', 'black'],
                ['black', 'red', 'black', 'red'],
                [],
                [],
                [],
            ]
            expect(game.checkForDiagonalWinner()).toBe(true)
        })

        it('should return true if there is a winner diagonally (negatively)', () => {
            game.grid = [
                ['red', 'black', 'red', 'black'],
                ['black', 'red', 'black', 'red'],
                ['red', 'black', 'red', 'black'],
                ['black', 'red', 'black'],
                [],
                [],
                [],
            ]
            expect(game.checkForDiagonalWinner()).toBe(true)
        })
    })
})

describe('shiftGrid()', () => {
    it('should shift the grid incrementing by 1', () => {
        const actual = shiftGrid([
            ['red'],
            ['black'],
            ['red'],
            ['black'],
            ['red'],
            ['black'],
            ['red'],
        ])
        const expected: Grid<GridCell> = [
            ['red'],
            [undefined, 'black'],
            [undefined, undefined, 'red'],
            [undefined, undefined, undefined, 'black'],
            [undefined, undefined, undefined, undefined, 'red'],
            [undefined, undefined, undefined, undefined, undefined, 'black'],
            [undefined, undefined, undefined, undefined, undefined, undefined, 'red'],
        ]
        expectGridsToEqual(actual, expected)
    })

    it('should shift the grid in reverse incrementing by 1', () => {
        const actual = shiftGrid(
            [['red'], ['black'], ['red'], ['black'], ['red'], ['black'], ['red']],
            true,
        )
        const expected: Grid<GridCell> = [
            [undefined, undefined, undefined, undefined, undefined, undefined, 'red'],
            [undefined, undefined, undefined, undefined, undefined, 'black'],
            [undefined, undefined, undefined, undefined, 'red'],
            [undefined, undefined, undefined, 'black'],
            [undefined, undefined, 'red'],
            [undefined, 'black'],
            ['red'],
        ]
        expectGridsToEqual(actual, expected)
    })
})

describe('invertGrid()', () => {
    it('should rotate the grid 90 degrees clockwise', () => {
        const actual = invertGrid([
            ['red', 'red', 'red'],
            ['black', 'black', 'black', 'black'],
            ['red', 'red', 'red', 'red', 'red'],
            ['black', 'black', 'black', 'black', 'black', 'black'],
            ['red', 'black', 'red', 'black'],
            ['black', 'red', 'black'],
            ['red', 'black'],
        ])
        const expected: Grid<GridCell> = [
            ['red', 'black', 'red', 'black', 'red', 'black', 'red'],
            ['red', 'black', 'red', 'black', 'black', 'red', 'black'],
            ['red', 'black', 'red', 'black', 'red', 'black', undefined],
            [undefined, 'black', 'red', 'black', 'black', undefined, undefined],
            [undefined, undefined, 'red', 'black', undefined, undefined, undefined],
            [undefined, undefined, undefined, 'black', undefined, undefined, undefined],
        ]
        expectGridsToEqual(actual, expected)
    })
})

describe('validateGridDimensions()', () => {
    it('should throw if there are more than 7 columns', () => {
        expect(() => validateGridDimensions([[], [], [], [], [], [], [], []])).toThrowError()
    })

    it('should throw if there are less than 6 columns', () => {
        expect(() => validateGridDimensions([[], [], [], [], []])).toThrowError()
    })

    it('should throw if column has too many chips', () => {
        expect(() =>
            validateGridDimensions([
                ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
                [],
                [],
                [],
                [],
                [],
                [],
            ]),
        ).toThrowError()
    })

    it('should not throw if grid is valid', () => {
        expect(() =>
            validateGridDimensions([
                ['red', 'red', 'red', 'red', 'red', 'red'],
                [],
                [],
                [],
                [],
                [],
                [],
            ]),
        ).not.toThrowError()
    })
})

describe('fillGrid()', () => {
    it('should fill empty rows with specified filler', () => {
        const actual = fillGrid([
            ['red', 'red', 'red'],
            ['black', 'black', 'black', 'black'],
            ['red', 'red', 'red', 'red', 'red'],
            ['black', 'black', 'black', 'black', 'black', 'black'],
            ['red', 'black', 'red', 'black'],
            ['black', 'red', 'black'],
            ['red', 'black'],
        ])
        const expected: Grid<GridCell> = [
            ['red', 'red', 'red', undefined, undefined, undefined],
            ['black', 'black', 'black', 'black', undefined, undefined],
            ['red', 'red', 'red', 'red', 'red', undefined],
            ['black', 'black', 'black', 'black', 'black', 'black'],
            ['red', 'black', 'red', 'black', undefined, undefined],
            ['black', 'red', 'black', undefined, undefined, undefined],
            ['red', 'black', undefined, undefined, undefined, undefined],
        ]
        expectGridsToEqual(actual, expected)
    })
})

describe('unFillGrid()', () => {
    it('should remove undefined rows', () => {
        const actual = fillGrid([
            ['red', 'red', 'red', undefined, undefined, undefined],
            ['black', 'black', 'black', 'black', undefined, undefined],
            ['red', 'red', 'red', 'red', 'red', undefined],
            ['black', 'black', 'black', 'black', 'black', 'black'],
            ['red', 'black', 'red', 'black', undefined, undefined],
            ['black', 'red', 'black', undefined, undefined, undefined],
            ['red', 'black', undefined, undefined, undefined, undefined],
        ])
        const expected: Grid<GridCell> = [
            ['red', 'red', 'red'],
            ['black', 'black', 'black', 'black'],
            ['red', 'red', 'red', 'red', 'red'],
            ['black', 'black', 'black', 'black', 'black', 'black'],
            ['red', 'black', 'red', 'black'],
            ['black', 'red', 'black'],
            ['red', 'black'],
        ]
        expectGridsToEqual(actual, expected)
    })
})

function expectGridsToEqual(actual: Grid<GridCell>, expected: Grid<GridCell>) {
    actual.forEach((column, columnIndex) => {
        column.forEach((row, rowIndex) => {
            expect(row).toEqual(expected[columnIndex][rowIndex])
        })
    })
}
