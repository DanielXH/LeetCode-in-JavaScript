/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let i = 0
    let j = str.length - 1
    while (str[i] == str[j]) {
        if (j - i <= 2) return true
        i++
        j--
    }
    return false
};