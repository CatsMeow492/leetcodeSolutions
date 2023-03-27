/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let recursionHelper = function(start, end) {
      if (start > end) {
          return -1; // base case: search interval is empty
      }
      
      let middle = Math.floor((start + end) / 2);
      
      if (target === nums[middle]) {
          return middle;
      } else if (target > nums[middle]) {
          return recursionHelper(middle + 1, end);
      } else {
          return recursionHelper(start, middle - 1);
      }
  }
  
  return recursionHelper(0, nums.length - 1);
};
