export default class Node<T> {
  val: T
  left: Node<T> | null
  right: Node<T> | null

  constructor(val: T, left: Node<T> | null = null, right: Node<T> | null = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
