/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  let result = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let len = Math.min(result.length, strs[i].length);
    while (result.substring(0, len) !== strs[i].substring(0, len)) {
      len--;
    }
    result = result.substring(0, len);
  }
  return result;
};
