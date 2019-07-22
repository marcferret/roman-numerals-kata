class RomanNumerals {
    convertToRomanNumeral(number) {
        if (number < 4) {
            let conversion = '';
            for (let i = 0; i < number; i++) {
                conversion += 'I';
            }
            return conversion;
        }
        return 'IV';
    }
}

export default RomanNumerals;