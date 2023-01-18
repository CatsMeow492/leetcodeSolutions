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
 var inorderTraversal = function(root) {
    let result = [];
    if (root) {
        result = result.concat(inorderTraversal(root.left));
        result.push(root.key);
        result = result.concat(inorderTraversal(root.right));
    }
    console.log(result);
    return result;

};

// Test Case 1
inorderTraversal([1,null,2,3]) // [1,3,2]