/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length == k) return '0'
    let minDigit = num[0]
    let minIndex = 0
    for (let i = 1; i < num.length; i++) {
        if (minDigit > num[i]) {
            minDigit = num[i]
            minIndex = i
        }
    }
    if (minIndex <= k) {
        let loop = k - minIndex
        let count = 0
        num = num.slice(minIndex)
        while (count < loop) {
          for (let i = 0; i < num.length; i++) {
            if (num[i] > num[i+1]) {
              num = num.replace(num[i], '')
              count++
              break;
            }
            if (i == num.length - 1) {
              num = num.substr(0, num.length - 1)
              count++
            }
          }
        }
    } else {
        let count = 0
        while (count < k) {
          for (let i = 0; i < minIndex; i++) {
            if (num[i] > num[i+1]) {
              num = num.replace(num[i], '')
              count++
              break;
            }
          }
        }
    }
    while(num[0] == '0' && num.length > 1) {
        num = num.substring(1)
    }

    return num
};