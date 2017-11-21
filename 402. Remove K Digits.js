/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let digits = num.length - k
  let stk = []
  let top = 0
  // k 用于记录可以移走多少个数位
  // 如果在栈 stk 中的前一位字符，要比当前的字符大的话，
  // 用当前字符替换前一位字符，并使 k - 1
  // 当 k 为 0，时不能再替换删除字符
  for (let i = 0; i < num.length; i++) {
    let c = num[i]
    while (top > 0 && stk[top-1] > c && k > 0) {
      top -= 1
      k -= 1
    }
    stk[top++] = c
  }
  // 找出前位零，并删除
  let idx = 0
  while (idx < digits && stk[idx] == '0') {
    idx++
  }
  stk = stk.join('').substr(idx, digits - idx)
  return idx == digits ? '0' : stk
};
