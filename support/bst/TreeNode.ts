export default class TreeNode<T> {
    private _value: T
    private _left?: TreeNode<T>
    private _right?: TreeNode<T>

    constructor(value: T, left?: TreeNode<T>, right?: TreeNode<T>) {
        this._value = value
        this._left = left
        this._right = right
    }

    get value() {
        return this._value
    }

    get left() {
        return this._left
    }

    /**
     * This method is private.  Please use the static insert method instead
     */
    private set left(value: TreeNode<T> | undefined) {
        this._left = value
    }

    get right() {
        return this._right
    }

    /**
     * This method is private.  Please use the static insert method instead
     */
    private set right(value: TreeNode<T> | undefined) {
        this._right = value
    }

    static insert<T>(value: T, node?: TreeNode<T>): TreeNode<T> {
        if (!node) {
            return new TreeNode(value)
        }

        if (value <= node.value) {
            node.left = TreeNode.insert(value, node.left)
        } else {
            node.right = TreeNode.insert(value, node.right)
        }

        return node
    }
}
