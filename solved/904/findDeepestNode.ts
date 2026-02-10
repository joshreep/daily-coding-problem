import NodeAnalyzer from '../../lib/bst/NodeAnalyzer'
import TreeNode from '../../lib/bst/TreeNode'

export default function findDeepestNodes<T>(root: TreeNode<T>): TreeNode<T>[] {
  return new NodeAnalyzer(root).findDeepestNodesInTree()
}
