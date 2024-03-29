import RomanNumerals from './romanNumerals'

const romanNumerals = new RomanNumerals();

describe('Test Roman Numerals', () => {
    describe('conversion 1,2', () => {
       test.each`
        normalNumber   | romanNumeral
        ${1}    | ${'I'}
        ${2}    | ${'II'}
        ${3}    | ${'III'}
        ${4}    | ${'IV'}
        ${5}    | ${'V'}
        ${6}    | ${'VI'}
        ${8}    | ${'VIII'}
        ${9}    | ${'IX'}
        ${10}   | ${'X'}
        ${11}   | ${'XI'}
        `('converts $normalNumber to $romanNumeral', ({normalNumber, romanNumeral}) => {
           expect(romanNumerals.convertToRomanNumeral(normalNumber)).toEqual(romanNumeral);
       });
    });
});

