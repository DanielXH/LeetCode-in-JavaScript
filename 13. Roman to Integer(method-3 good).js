/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const t = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0
    for (let i = 0; i < s.length-1; i++) {
        if (t[s[i]] >= t[s[i+1]]) {
            sum += t[s[i]]
        } else {
            sum -= t[s[i]]
        }
    }
    return sum + t[s[s.length-1]]
};