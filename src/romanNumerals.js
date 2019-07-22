class RomanNumerals {
    convertToRomanNumeral(number) {
        let conversion = '';

        for (let i = 0; i < number; i++) {
            conversion += 'I';
        }

        return conversion;
    }
}

export default RomanNumerals;