class RomanNumerals {
    convertToRomanNumeral(number) {
        let conversion = '';

        if(number < 4 ){
            for (let i = 0; i < number; i++) {
                conversion += 'I';
            }
        }else{
            conversion = 'IV'
        }

        return conversion;
    }
}

export default RomanNumerals;