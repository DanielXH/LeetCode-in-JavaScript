/**
 * @param {number} x
 * @return {number}
 */
const maxInteger = 2147483647
const minInteger = -2147483647

var reverse = function(x) {
    let result = 0
    while (x != 0) {
        let digit = x % 10
        result = result * 10 + digit
        if (x >= 0) x = Math.floor(x / 10)
        if (x < 0) x = Math.ceil(x / 10)
    }
    if (result > maxInteger || result < minInteger) return 0
    return result
};