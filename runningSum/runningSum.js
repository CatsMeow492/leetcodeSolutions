/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [nums[0]];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++){
        sum += nums[i];
        result[i] = sum;
    }
    return result
};