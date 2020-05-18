import flatten, { StringKeyObject } from './flatten'

describe('flatten', () => {
    test('should flatten a nested dictionary', () => {
        const input: StringKeyObject<any> = { key: 3, foo: { a: 5, bar: { baz: 8 } } }
        const expected: StringKeyObject<any> = { key: 3, 'foo.a': 5, 'foo.bar.baz': 8 }

        Object.keys(expected).forEach((key) => {
            expect(flatten(input)[key]).toEqual(expected[key])
        })
    })
})
