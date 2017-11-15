/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let digits = num.length - k;
  let stk = [];
  let top = 0;
  for (let i = 0; i < num.length; i++) {
    let c = num[i];
    while (top > 0 && stk[top - 1] > c && k > 0) {
      top -= 1;
      k -= 1;
    }
    stk[top++] = c;
  }
  let idx = 0;
  while (idx < digits && stk[idx] == "0") {
    idx++;
  }
  return idx == digits ? "0" : stk.join("");
};
