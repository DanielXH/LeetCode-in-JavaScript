/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let len = s.length
    let rev = s.split('').reverse().join('')
    for (let i = 0; i < len; i++) {
        if (s.substring(0, len-i) == rev.substring(i)) {
            return rev.substring(0, i) + s
        }
    }
    return ''
};