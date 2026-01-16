import { expect, test } from 'vitest'
import flattenDictionary from './flattenDictionary'

const tests = [
  {
    dic: { key: 3, foo: { a: 5, bar: { baz: 8 } } },
    expected: { 'key': 3, 'foo.a': 5, 'foo.bar.baz': 8 },
  },
]

test('should flatten a nested dictionary', () => {
  const { dic, expected } = tests[0]
  expect(flattenDictionary(dic)).toStrictEqual(expected)
})
