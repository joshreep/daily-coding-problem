const multiplicationTableCounter = (tableSize: number, findNumber: number): number => {
    const multiplicationTable = multiplicationTableGenerator(tableSize)
    const flattenedTable = multiplicationTable.flat()

    return flattenedTable.reduce((previousValue, currentValue) => {
        if (currentValue === findNumber) return previousValue + 1

        return previousValue
    }, 0)
}

export const multiplicationTableGenerator = (tableSize: number) => {
    const multiplicationTable: number[][] = []

    for (let rowIndex = 1; rowIndex <= tableSize; rowIndex++) {
        const row: number[] = []

        for (let columnIndex = 1; columnIndex <= tableSize; columnIndex++) {
            row.push(rowIndex * columnIndex)
        }

        multiplicationTable.push(row)
    }

    return multiplicationTable
}

export default multiplicationTableCounter
