const numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = numerals[s[i]];
        const next = numerals[s[i + 1]] ?? 0;
        if (current < next) {
            result += next - current;
            i++;
            continue;
        }
        result += current;
    }
    return result;
};
