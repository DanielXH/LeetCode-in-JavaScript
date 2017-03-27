var nextGreaterElements = function(nums) {
    let output = [],
    cirNums = nums.slice();
    cirNums.push(...nums.slice());
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while(nums[i] >= cirNums[++j]);
        if (j >= nums.length + i) { output.push(-1); }
        else { output.push(cirNums[j]); }
    }
    return output;
};
