/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Is there a better way to do this? Maybe a cool forEach solution?
//  var twoSum = function(nums, target) {
//     nums.forEach(element1 => 
//         nums.forEach(element2 => {
//             if (element1 + element2 == target && nums.indexOf(element1) != nums.indexOf(element2)) 
//                 {
//                     return [nums.indexOf(element1), nums.indexOf(element2)]
//                 }
//             }
//         )
//     );
// };

var twoSum = function(nums, target) {
    // for each element in nums
    for (let i = 0; i < nums.length; i++) {
        // check if there is another element in nums that adds up to target
        // return an array containing the indices of the two elements
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j]
            }
        }
        
    }
}