import { convert } from './';

describe('6. Zigzag Conversion', () => {
    test('should return conversion', () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR")
    });
});