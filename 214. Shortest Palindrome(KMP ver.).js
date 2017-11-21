/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  let l = s.length
  let rev = s.split('').reverse().join('')
  let s_new = s + '#' + rev
  let l_new = s_new.length
  let f = new Array(l_new).fill(0)
  for (let i = 1; i < l_new; i++) {
   let t = f[i-1]
   while (t > 0 && s_new[i] != s_new[t]) {
     t = f[t-1]
   }
    if (s_new[i] == s_new[t]) {
      ++t
    }
    f[i] = t
  }
  return rev.substring(0, l - f[l_new - 1]) + s
};