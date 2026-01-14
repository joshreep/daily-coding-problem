import TreeNode from '../../support/bst/TreeNode'
import findDeepestNodes from './findDeepestNode'

test('should find the deepest node', () => {
    const nodeC = new TreeNode('c')
    const nodeD = new TreeNode('d')
    const nodeB = new TreeNode('b', nodeD)
    const nodeA = new TreeNode('a', nodeB, nodeC)

    expect(findDeepestNodes(nodeA).map((node) => node.value)).toStrictEqual([nodeD.value])
})

test('should find the deepest node when there are multiple nodes at the deepest level', () => {
    const nodeH = new TreeNode('h')
    const nodeI = new TreeNode('i')
    const nodeJ = new TreeNode('j')
    const nodeF = new TreeNode('f', nodeH, nodeI)
    const nodeG = new TreeNode('g', undefined, nodeJ)
    const nodeE = new TreeNode('e', nodeF, nodeG)

    expect(findDeepestNodes(nodeE).map((node) => node.value)).toStrictEqual([
        nodeH.value,
        nodeI.value,
        nodeJ.value,
    ])
})
