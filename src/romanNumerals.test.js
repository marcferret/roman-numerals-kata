import RomanNumerals from './romanNumerals'

const romanNumerals = new RomanNumerals();

describe('Test Roman Numerals', () => {
    describe('conversion 1,2', () => {
       test.each`
        normalNumber   | romanNumeral
        ${1}    | ${'I'}
        ${2}    | ${'II'}
        `('converts $normalNumber to $romanNumeral', ({normalNumber, romanNumeral}) => {
           expect(romanNumerals.convertToRomanNumeral(normalNumber)).toEqual(romanNumeral);
       });
    });
});

