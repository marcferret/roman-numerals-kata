class RomanNumerals {
    convertToRomanNumeral(number) {
        if (number < 4) {
            let conversion = '';
            for (let i = 0; i < number; i++) {
                conversion += 'I';
            }
            return conversion;
        } else if (number === 4) {
            return 'IV';
        }
        return 'V';
    }
}

export default RomanNumerals;