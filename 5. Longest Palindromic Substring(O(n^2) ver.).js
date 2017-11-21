/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let r = ''
    for (let i = 0; i < s.length; i++) {
        let r1 = checkPalindrome(s, i - 1, i + 1)
        let r2 = checkPalindrome(s, i, i + 1)
        let temp = r1.length > r2.length ? r1 : r2

        if (temp.length > r.length) r = temp
    }

    function checkPalindrome(s, n, m) {
        while (n >= 0 && m < s.length && s[n] == s[m]) {
            n--
            m++
        }
        return s.substring(n + 1, m)
    }
    return r
};