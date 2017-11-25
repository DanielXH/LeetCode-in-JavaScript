/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target)
    } else {
        for (let i = nums.length-1; i >= 0; i--) {
            if (nums[i] < target) {
                return ++i
            } else if (i == 0) {
                return 0
            }
        }
    }
};