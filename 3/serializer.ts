import Node from './Node'

export const serialize = (root: Node): string => {
    const renderSide = (side: 'left' | 'right') => {
        const sideNode = root[side]

        if (!sideNode) return ''

        return `, "${side}": ${serialize(sideNode)}`
    }

    const result = `{"val": "${root.val}"${renderSide('left')}${renderSide('right')}}`

    return result
}

export const deSerialize = (string: string): Node => {
    return new Node('')
}
