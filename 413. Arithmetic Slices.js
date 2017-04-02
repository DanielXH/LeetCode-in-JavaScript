/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let sum = 0,
        cur = 0;
    for (let i = 2; i < A.length; i++) {
        if (A[i]-A[i-1] == A[i-1]-A[i-2]) {
            cur += 1;
            sum += cur;
        } else {
            cur = 0;
        }
    }
    return sum;
};
