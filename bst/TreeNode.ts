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

    set left(value: TreeNode<T> | undefined) {
        if (this._left) this._throwValueAlreadySetError('left')
        this._left = value
    }

    get right() {
        return this._right
    }

    set right(value: TreeNode<T> | undefined) {
        if (this._right) this._throwValueAlreadySetError('right')
        this._right = value
    }

    private _throwValueAlreadySetError(side: 'left' | 'right') {
        throw new Error(`A value has already been set for the ${side} side of this Node.`)
    }
}
