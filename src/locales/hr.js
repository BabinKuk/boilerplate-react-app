import numeral from 'numeral';

// load a locale
numeral.register('locale', 'hr', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: 'HRK'
    }
});

// switch between locales
numeral.locale('hr');