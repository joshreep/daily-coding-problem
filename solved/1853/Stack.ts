export default class Stack<T extends string | number> {
    stack: T[]

    constructor(initialStack: T[] = []) {
        this.stack = initialStack
    }

    push(val: T) {
        this.stack = [val, ...this.stack]
    } 
    
    pop(): T | null {
        if (!this.stack.length) return null

        const popped = this.stack[0]
        this.stack = this.stack.slice(1)

        return popped
    }
    
    max(): T | null {
        if (!this.stack.length) return null

        if (typeof this.stack[0] === 'number') {
            return Math.max(...(this.stack as number[])) as T
        }

        if (typeof this.stack[0] === 'string') {
            return [...(this.stack) as string[]].sort((a, b) => b.length - a.length)[0] as T
        }

        throw new Error('unsupported stack type')
    }
}