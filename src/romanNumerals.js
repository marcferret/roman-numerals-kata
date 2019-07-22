class RomanNumerals {
    convertToRomanNumeral(number) {
        if (number < 4) {
            let conversion = '';
            for (let i = 0; i < number; i++) {
                conversion += 'I';
            }
            return conversion;
        } else if (number === 9) {
            return 'IX';
        } else if (number === 10) {
            return 'X';
        } else if (number === 11) {
            return 'XI';
        }

        if (number >= 4) {
            let conversion = 'V';

            if (number === 4) {
                conversion = `I${conversion}`;
                return conversion;
            }

            for (let i = 5; i < number; i++) {
                conversion += 'I';
            }
            return conversion;
        }
    }
}

export default RomanNumerals;