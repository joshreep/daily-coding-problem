import Node from './Node'

export const serialize = (root: Node): string => {
    if (!root) throw new Error('No root Node provided')

    const renderSide = (side: 'left' | 'right') => {
        const sideNode = root[side]

        if (!sideNode) return ''

        return `, "${side}": ${serialize(sideNode)}`
    }

    const result = `{"val": "${root.val}"${renderSide('left')}${renderSide('right')}}`

    return result
}

type JsonObject = {
    val: string
    left?: JsonObject
    right?: JsonObject
}

export const deSerialize = (string: string): Node => {
    const jsonObject: JsonObject = eval(`(${string})`)

    const parse = (object: { [key: string]: any }): Node => {
        const left = object.left ? parse(object.left) : undefined
        const right = object.right ? parse(object.right) : undefined

        return new Node(object.val, left, right)
    }

    return parse(jsonObject)
}
