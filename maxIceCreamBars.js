/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
    // Switch statement to handle edge cases
    switch (true) {
        case costs.length == 0:
            return 0;
        case costs.length == 1:
            return costs[0] <= coins ? 1 : 0;
        case costs[0] > coins:
            return 0;
        default:
            // Create a new array containing only ice cream bars that cost less than coins
            let affordable = costs
                .filter(element => element <= coins)
                .sort((a, b) => a - b);
                console.log(affordable);
            let total = 0;
            let count = 0;
            for (let i = 0; i < affordable.length; i++) {
                total += affordable[i];
                if (total <= coins) {
                    count++;
                } else {
                    break;
                }
            }
            return count;
    }
};


// Test Case 1
maxIceCream([1,3,2,4,1,10], 7) // 4