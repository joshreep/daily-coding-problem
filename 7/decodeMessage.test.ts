import decodeMessage from './decodeMessage'

describe('decodeMessage', () => {
    it('should successfully decode a valid encoded message', () => {
        expect(decodeMessage('111')).toBe(3)
    });

    it('should throw an error on an invalid encoded message', () => {
        expect(decodeMessage('001')).toThrow()
    });
});