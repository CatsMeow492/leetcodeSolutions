/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1 = nums.slice(0, n);
    let arr2 = nums.slice(n, nums.length);
    let shuffled = [];
    for (let i = 0; i < nums.length/2; i++){
        shuffled.push(arr1[i],arr2[i])
    }
    console.log(shuffled)
    return shuffled
};

// Better solution 

var shuffle = function(nums, n) {
    let shuffled = [];
    for (let i = 0; i < n; i++){
        shuffled.push(nums[i], nums[i + n]);
    }
    console.log(shuffled)
    return shuffled
};
