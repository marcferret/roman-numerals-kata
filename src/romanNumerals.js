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
            return this.extracted(number, 9, 'X');
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

    extracted(number, groupNumber, groupRoman) {
        let conversion = groupRoman;

        if (number === groupNumber) {
            conversion = `I${conversion}`;
            return conversion;
        }

        for (let i = groupNumber + 1; i < number; i++) {
            conversion += 'I';
        }
        return conversion;
    }
}

export default RomanNumerals;