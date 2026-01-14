import NodeAnalyzer from '../../support/bst/NodeAnalyzer'
import TreeNode from '../../support/bst/TreeNode'

export default function findDeepestNodes<T>(root: TreeNode<T>): TreeNode<T>[] {
    return new NodeAnalyzer(root).findDeepestNodesInTree()
}
