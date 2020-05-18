import flatten, { StringKeyObject } from './flatten'

describe('flatten', () => {
    const scenarios: { input: StringKeyObject; expected: StringKeyObject }[] = [
        {
            input: { key: 3, foo: { a: 5, bar: { baz: 8 } } },
            expected: { key: 3, 'foo.a': 5, 'foo.bar.baz': 8 },
        },
        {
            input: {
                key: 3,
                foo: { a: 5, bar: { baz: 8, thing: { thang: 49, that: { this: 2 } } } },
            },
            expected: {
                key: 3,
                'foo.a': 5,
                'foo.bar.baz': 8,
                'foo.bar.thing.thang': 49,
                'foo.bar.thing.that.this': 2,
            },
        },
    ]
    scenarios.forEach((scenario) => {
        test('should flatten a nested dictionary', () => {
            Object.keys(scenario.expected).forEach((key) => {
                expect(flatten(scenario.input)[key]).toEqual(scenario.expected[key])
            })
        })
    })
})
