/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0
    if(s.indexOf("IV") != -1) { sum -= 2 }
    if(s.indexOf("IX") !=- 1) { sum -= 2 }
    if(s.indexOf("XL") != -1) { sum -= 20 }
    if(s.indexOf("XC") != -1) { sum -= 20 }
    if(s.indexOf("CD") != -1) { sum -= 200 }
    if(s.indexOf("CM") != -1) { sum -= 200 }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'M') sum += 1000
        if (s[i] == 'D') sum += 500
        if (s[i] == 'C') sum += 100
        if (s[i] == 'L') sum += 50
        if (s[i] == 'X') sum += 10
        if (s[i] == 'V') sum += 5
        if (s[i] == 'I') sum += 1
    }
    
    return sum
};