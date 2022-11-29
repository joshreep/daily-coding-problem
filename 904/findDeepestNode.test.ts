import findDeepestNodes from './findDeepestNode'
import TreeNode from '../bst/TreeNode'

test('should find the deepest node', () => {
    const nodeC = new TreeNode('c')
    const nodeD = new TreeNode('d')
    const nodeB = new TreeNode('b', nodeD)
    const nodeA = new TreeNode('a', nodeB, nodeC)

    expect(findDeepestNodes(nodeA)).toStrictEqual([nodeD])
})

test('should find the deepest node when there are multiple nodes at the deepest level', () => {
    const nodeD = new TreeNode('d')
    const nodeE = new TreeNode('e')
    const nodeF = new TreeNode('f')
    const nodeB = new TreeNode('b', nodeD, nodeE)
    const nodeC = new TreeNode('c', undefined, nodeF)
    const nodeA = new TreeNode('a', nodeB, nodeC)

    expect(findDeepestNodes(nodeA)).toStrictEqual([nodeD, nodeE, nodeF])
})
