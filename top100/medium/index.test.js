import { convert, reverse } from './';

describe('6. Zigzag Conversion', () => {
    test('should return conversion', () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR")
    });
});


describe('7. Reverse Integer', () => {
    test('should return reversed integer', () => {
        expect(reverse(123)).toBe(321);
        expect(reverse(-123)).toBe(-321);
        expect(reverse(120)).toBe(21);
    });
});