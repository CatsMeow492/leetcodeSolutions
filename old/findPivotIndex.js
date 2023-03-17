/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
        let sum =  nums.reduce((a, b) => a + b, 0);
        let leftSum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum -= nums[i];
            if (leftSum === sum) {
                return i;
            }
            leftSum += nums[i];
        }
        return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))