export type StringKeyObject<T = any> = { [key: string]: T }

export default function flatten<T>(input: StringKeyObject<T>): StringKeyObject<T> {
    return {}
}
