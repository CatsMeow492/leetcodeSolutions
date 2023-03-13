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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
      return true;
  }
  return isMirror(root.left, root.right);
};
// Helper Function
let isMirror = function(firstNode, secondNode) {
      // Depth-First Search
      if (!firstNode || !secondNode){
          return firstNode == secondNode;
      }
      if (firstNode.val !== secondNode.val) {
          return false
      }
      return isMirror(firstNode.left, secondNode.right) && isMirror(firstNode.right, secondNode.left);
}