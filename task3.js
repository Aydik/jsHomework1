function convertChar(ch) {
    const romanToArabic = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };
    return romanToArabic[ch];
}

function toArabicNumber(romanNumber) {
    return [...romanNumber].reduce((answer, char, i, arr) => {
        const current = convertChar(char);
        const next = convertChar(arr[i + 1]);
        return current >= next ? answer + current : answer - current;
    }, 0);
}

const romanNumber = "MCMXCIV";
console.log(toArabicNumber(romanNumber))