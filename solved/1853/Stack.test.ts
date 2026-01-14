import { describe, expect, test } from 'vitest'
import Stack from './Stack'

test('should be able to push an element onto the stack', () => {
    const stack = new Stack()
    stack.push('test push')
    expect(stack.stack[0]).toBe('test push')
})

describe('pop()', () => {
    test('should pop off and return the topmost element on the stack', () => {
        const stack = new Stack<string>(['element to pop'])
        const popped = stack.pop() as string
        expect(popped).toBe('element to pop')
        expect(stack.stack.includes(popped)).toBe(false)
    })
    
    test('should return null if no items in stack', () => {
        const stack = new Stack()
        const popped = stack.pop()
        expect(popped).toBeNull()
    })
})

describe('max()', () => {
    test('should return the maximum value in teh stack currently', () => {
        const stack = new Stack<string>(['hey', 'hey world', 'hey there world'])
        expect(stack.max()).toBe('hey there world')
    })

    test('should return null if no items in stack', () => {
        const stack = new Stack()
        expect(stack.max()).toBeNull()
    })
})

