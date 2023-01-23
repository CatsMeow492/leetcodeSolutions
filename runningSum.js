var runningSum = function(nums) {
  let i ;
    let sum = 0;
    let result = [];
    for (i = 0; i < nums.length; i++) {
        // Add num at index i to sume
        sum += nums[i];
        // Push sum to result array
        result.push(sum);
    }  
    return result;
};