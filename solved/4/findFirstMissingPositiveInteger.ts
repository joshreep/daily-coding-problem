const findFirstMissingPositiveInteger = (array: number[]) => {
    const positiveIntegersArray = array.filter(value => value >= 1)
    const uniqueArray = positiveIntegersArray.filter(
        (value, index) => positiveIntegersArray.indexOf(value) === index
    )
    const sortedArray = uniqueArray.sort()
    let result = 0

    sortedArray.forEach((value, index) => {
        if (result === 0) {
            if (value !== index + 1) result = index + 1
        }
    })

    if (result === 0) {
        result = sortedArray[sortedArray.length - 1] + 1
    }

    return result
}

export default findFirstMissingPositiveInteger
