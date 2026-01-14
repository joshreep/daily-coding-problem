import { expect, test } from 'vitest'
import findSubstringFromSet from './findSubstringFromSet'

const tests = [
    {string: 'figehaeci', set: ['a', 'e', 'i'], expected: 'aeci'},
    {string: 'joshreepissocool', set: ['j', 'p', 's'], expected: 'joshreep'},
    {string: 'helloworld', set: ['h', 'd'], expected: 'helloworld'},
    {string: 'goodbyeworld', set: ['o'], expected: 'o'},
    {string: 'thebest', set: ['z', 'x'], expected: null}

]

test.each(tests)(
    'should return substring $expected, when given $string, and set $set', 
    ({string, set, expected}) => {
        expect(findSubstringFromSet(string, set)).toBe(expected)
    }
)