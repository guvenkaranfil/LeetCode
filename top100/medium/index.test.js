import { convert, myAtoi, reverse } from './';

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


describe('8. String to Integer (atoi)', () => {
    test('should return converted number', () => {
        expect(myAtoi("42")).toBe(42);
        expect(myAtoi("   -42")).toBe(-42);
        expect(myAtoi("4193 with words")).toBe(4193);
    });
});