import NodeAnalyzer from '../bst/NodeAnalyzer'
import TreeNode from '../bst/TreeNode'

export default function findDeepestNodes<T>(root: TreeNode<T>): TreeNode<T>[] {
    return new NodeAnalyzer(root).findDeepestNodesInTree()
}
