/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++){
        if (seen[nums[i]]){
            return true 
        }
        seen[nums[i]] = true ;
    }
    return false;
};


// Alternate

function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
  