export type StringKeyObject<T = any> = { [key: string]: T }

export default function flatten<T>(input: StringKeyObject<T>): StringKeyObject<T> {
    const inputEntries = Object.entries(input)

    if (inputEntries.every(([, value]) => value === null || typeof value !== 'object')) {
        return input
    }

    const result: StringKeyObject<T> = {}

    inputEntries.forEach(([key, value]) => {
        if (value === null || typeof value !== 'object') {
            result[key] = value
        } else {
            Object.entries(value).forEach(([subKey, subValue]) => {
                result[`${key}.${subKey}`] = subValue
            })
        }
    })

    return flatten(result)
}
