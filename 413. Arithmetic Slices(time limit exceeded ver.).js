/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 3; j <= A.length; j++) {
            sum++;
            let arrSli = A.slice(i,j);
            let check = arrSli[1] - arrSli[0];
            for (let q = 1; q < arrSli.length; q++) {
                if (arrSli[q] - arrSli[q - 1] !== check) {
                    sum--;
                    break;
                }
            }
        }
    }
    return sum;
};
