class Node {
    constructor(val: string, left?: Node, right?: Node) {
        this.val = val
        this.left = left
        this.right = right
    }

    val: string
    left?: Node
    right?: Node
}

export default Node
