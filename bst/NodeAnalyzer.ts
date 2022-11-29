import TreeNode from './TreeNode'

export default class NodeAnalyzer<T> {
    private _tree: TreeNode<T>

    constructor(root: TreeNode<T>) {
        this._tree = root
    }

    findDeepestNodesInTree(): TreeNode<T>[] {
        function findDeepestNodesInner(topLevelNodes: TreeNode<T>[]): TreeNode<T>[] {
            if (topLevelNodes.every((node) => !NodeAnalyzer.hasChildren(node))) return topLevelNodes

            const nodesWithChildren = topLevelNodes.filter((node) => NodeAnalyzer.hasChildren(node))

            return findDeepestNodesInner(
                nodesWithChildren.flatMap((node) => NodeAnalyzer.getChildren(node)),
            )
        }

        return findDeepestNodesInner([this._tree])
    }

    static hasChildren<T>(node: TreeNode<T>): boolean {
        return !!node.left && !!node.right
    }

    static getChildren<T>(node: TreeNode<T>): TreeNode<T>[] {
        const children = []

        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        return children
    }
}
