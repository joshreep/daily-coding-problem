type Input = (number | '+' | '-'| '/'| '*')[]

export default function reversePolishNotation(input: Input): number {
    return innerRecurse(input)[0] as number
}

function innerRecurse(input: Input): Input {
    if (input.length === 1) return input

    const indexOfOperator = input.findIndex((value) => typeof value === 'string')

    const evaluation = `${input[indexOfOperator-2]}${input[indexOfOperator]}${input[indexOfOperator-1]}`

    return innerRecurse([...input.slice(0, indexOfOperator-2), eval(evaluation), ...input.slice(indexOfOperator+1)])
}