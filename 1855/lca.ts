export class Node<T> {
    value: T
    parent?: Node<T>
    children: [Node<T> | null, Node<T> | null] = [null, null]

    constructor(value: T, parent?: Node<T>) {
        this.value = value
        if (parent) this.parent = parent
    }

    addChild(childValue: T): Node<T> {
        if (this.children[0] && this.children[1]) {
            throw new Error('This Node already has two children')
        }

        const child = new Node(childValue, this)
        if (this.children[0] === null) this.children[0] = child
        else if (this.children[1] === null) this.children[1] = child

        return child
    }

    toString() {
        return this.value
    }
}

export default function lca<T>(v: Node<T>, w: Node<T>): Node<T> {
    const ancestry = new Set([v, w])
    return inner(v, w, ancestry)
   
}

function inner<T>(
    v: Node<T>, 
    w: Node<T>, 
    ancestry: Set<Node<T>>
): Node<T> {
    if (v === w) return v

    checkForMalformedData(v, w)
    
    if (v.parent && ancestry.has(v.parent)) return v.parent
    if (w.parent && ancestry.has(w.parent)) return w.parent
    
    ancestry.add(v.parent ?? v)
    ancestry.add(w.parent ?? w)
    
    return inner(v.parent ?? v, w.parent ?? w, ancestry)
}

function checkForMalformedData<T>(v: Node<T>, w: Node<T>) {
    if (v === w) return
    if (!v.parent && !w.parent) {
        throw new Error('malformed binary tree')
    }
    return
}