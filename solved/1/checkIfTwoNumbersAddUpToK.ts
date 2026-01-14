const checkIfTwoNumbersAddUpToK = (array: number[], k: number) => {
    return array.reduce((previousValue, currentValue, currentIndex, array) => {
        let thisValue = false

        array.forEach((element, index) => {
            if (currentIndex === index) thisValue = false || previousValue
            if (currentValue + element === k) thisValue = true
        });

        return thisValue
    }, false)
}

export default checkIfTwoNumbersAddUpToK