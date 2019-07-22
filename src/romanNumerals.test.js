import RomanNumerals from './romanNumerals'

const romanNumerals = new RomanNumerals();

describe('Test Roman Numerals', () => {
    test('convert 1 to roman numeral', () => {
        expect(romanNumerals.convertToRomanNumeral(1)).toEqual('I');
    });

    test('convert 2 to roman numeral', () => {
        expect(romanNumerals.convertToRomanNumeral(2)).toEqual('II');
    });
});

