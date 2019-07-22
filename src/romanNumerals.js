class RomanNumerals {
    convertToRomanNumeral(number) {
        if (number < 4) {
            let conversion = '';
            for (let i = 0; i < number; i++) {
                conversion += 'I';
            }
            return conversion;
        }

        if (number >= 9) {
            let conversion = 'X';

            if (number === 9) {
                conversion = `I${conversion}`;
                return conversion;
            }

            for (let i = 10; i < number; i++) {
                conversion += 'I';
            }
            return conversion;
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