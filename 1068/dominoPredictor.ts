const LeftMatchRegex = /(?<!R)\.(?=L)/gi
const RightMatchRegex = /(?<=R)\.(?!L)/gi

export default function dominoPredictor(input: string): string {
    return dominoPredictorInner(input)
}

function dominoPredictorInner(input: string): string {
    const leftIndexes = []
    const rightIndexes = []

    let match: RegExpExecArray | null
    while ((match = LeftMatchRegex.exec(input))) {
        leftIndexes.push(match.index)
    }
    while ((match = RightMatchRegex.exec(input))) {
        rightIndexes.push(match.index)
    }

    let newString: string = input
    newString = leftIndexes.reduce(
        (previousValue, currentValue) => replaceCharAt(previousValue, currentValue, 'L'),
        newString,
    )
    newString = rightIndexes.reduce(
        (previousValue, currentValue) => replaceCharAt(previousValue, currentValue, 'R'),
        newString,
    )

    if (newString === input) return newString

    return dominoPredictorInner(newString)
}

function replaceCharAt(string: string, index: number, char: string): string {
    if (index > string.length - 1) return string

    return string.substring(0, index) + char + string.substring(index + 1)
}
