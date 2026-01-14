import Node from './Node'
import { serialize, deSerialize } from './serializer'

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))
const string = '{"val": "root", "left": {"val": "left", "left": {"val": "left.left"}}, "right": {"val": "right"}}'

describe('serializer', () => {
    it('should serialize a Node to a string', () => {
        expect(serialize(node)).toBe(string)
    })

    it('should de-serialize a string back to a Node', () => {
        expect(deSerialize(string)).toStrictEqual(node)
    })

    it('should serialize and de-serialize a Node there and back again', () => {
        expect(deSerialize(serialize(node))?.left?.left?.val).toBe('left.left')
    })
})
