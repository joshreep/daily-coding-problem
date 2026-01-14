type StringableValue = number | string | boolean

type Params<T> = T | { [key: string]: Params<T> }

declare interface String {
    render<T extends StringableValue>(params: Params<T>): string
}

String.prototype.render = function <T extends StringableValue>(
    this: string,
    params: Params<T>,
): string {
    const template = this

    return template.replace(/\$\{([^${}]+)\}/g, (_, variable) => getVariableValue(variable, params))
}

function getVariableValue<T extends StringableValue>(variable: string, params: Params<T>): string {
    const variableValue = variable.split('.').reduce((previousValue, currentValue) => {
        if (typeof previousValue === 'object') {
            if (!(currentValue in previousValue)) {
                throw new Error(
                    `\${${variable}} was included in the template, but was not included in the given parameters.  Please include it in the params object.`,
                )
            }

            return previousValue[currentValue]
        }

        return previousValue
    }, params)

    return variableValue as string
}
