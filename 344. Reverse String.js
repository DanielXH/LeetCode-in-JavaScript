/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let output = '';
    [...s].reverse().forEach((item)=>{
        output += item;
    })
    return output;
};
