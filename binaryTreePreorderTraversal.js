/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let number = [];
    root.forEach(element => {
        // if element is not null, push to array
        // if element is null, do nothing
        if (element !== null) {
            number.push(element)
        }
    });
    console.log(number)
};

// Test Case 1
preorderTraversal([1,null,2,3]) // [1,2,3]