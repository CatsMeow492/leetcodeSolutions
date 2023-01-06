/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
    // sort the array ascending
    costs.sort((a, b) => a - b);
    // Switch statement to handle edge cases
    switch (true) {
        case costs.length == 0:
            return 0;
        case costs.length == 1:
            return costs[0] <= coins ? 1 : 0;
        case costs[0] > coins:
            return 0;
        default:
            
    
};


// Test Case 1
maxIceCream([1,3,2,4,1], 7) // 4