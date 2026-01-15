import { expect, test } from 'vitest'
import Node from './Node'
import { deserialize, serialize } from './serialize-utils'

test.skip('should serialize and deserialize', () => {
  const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))

  console.log(serialize(node))
  expect(deserialize(serialize(node))?.left?.left?.val).toBe('left.left')
})
