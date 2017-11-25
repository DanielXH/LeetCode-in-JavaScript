/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stk = []
    for (let i = 0; i < s.length; i++) {
        if ('({['.indexOf(s[i]) !== -1) {
            stk.push(s[i])
        } else if (stk[stk.length-1] == '(' && s[i] == ')') {
            stk.pop()
        } else if (stk[stk.length-1] == '{' && s[i] == '}') {
            stk.pop()
        } else if (stk[stk.length-1] == '[' && s[i] == ']') {
            stk.pop()
        } else {
            return false
        }
    }
    if (stk.length == 0) {
        return true
    } else {
        return false
    }
};