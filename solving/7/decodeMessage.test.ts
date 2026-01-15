import { describe, expect, test } from 'vitest'
import decodeMessage from './decodeMessage'

describe.skip('decodeMessage', () => {
  test('should successfully decode a valid encoded message', () => {
    expect(decodeMessage('111')).toBe(3)
  })

  test('should throw an error on an invalid encoded message', () => {
    expect(decodeMessage('001')).toThrow()
  })
})
