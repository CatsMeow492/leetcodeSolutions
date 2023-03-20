/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let solution = [];
      let helper = function (node) {
      if (node) {
          solution.push(node.val)
          node.children.forEach(function (child) {
              helper(child);
          })
      }
  }
  helper(root)
  return solution;   
};