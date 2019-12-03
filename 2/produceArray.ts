const produceArray = (array: number[]) => {
    return array.map((item, index) => {
        const arrayMinusIndex = [...array.slice(0, index), ...array.slice(index + 1)]
        return arrayMinusIndex.reduce((previousValue, currentValue) => {
            return previousValue * currentValue
        }, 1)
    })
}

export default produceArray
