import deepMerge from './index'

describe.skip('deepMerge()', () => {
    it('should merge two objects', () => {
        const left = { foo: { bar: 'baz' } }
        const right = { foo: { baz: 'bar' } }
        const expected = { foo: { bar: 'baz', baz: 'bar' } }
        const actual = deepMerge<{ [key: string]: any }>(left, right)

        expect(actual.foo.bar).toBe(expected.foo.bar)
        expect(actual.foo.baz).toBe(expected.foo.baz)
    })

    it('should merge an array', () => {
        const left = [2, 4, 6, 8]
        const right = [1, 3, 5, 7]
        const expected = [1, 2, 3, 4, 5, 6, 7, 8]
        const actual = deepMerge(left, right)

        expected.forEach((item) => {
            expect(actual.includes(item))
        })
    })

    it.todo('should prefer the correct side')
})
