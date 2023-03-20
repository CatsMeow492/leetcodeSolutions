# Problem
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
# Intuition
Obviously this is going to be a tree traversal problem. This usually means there's a recursive solution and an iterative solution that requires a stack. I'm going to try to do this recursively first. The first node is going to be the root. So how do we traverse from there?

Traversal problems also typically involve a few repeatable steps.
1. Initialize and empty list to store the values of the nodes
2. Create a helper function that takes a node as a parameter
    a. If the node is not null, add it's value to the list
    b. Iterate through the node's children
        i. Call the helper function with the child node
3. Call the helper function with the root node
4. Return the list of values
# Approach
I'm going to call another function in the predorder function to achieve the recursion to traverse the tree. I also need to create an empty array to store the values of the nodes.
# Psuedocode
helper 
    if node is not null
        add node's value to the list
        iterate through the node's children
            call helper with the child node
    call helper with the root node
    return the list of values
# Notes on Solution
# Algorithm
Depth First Search with a Preorder Traversal visitation order.
O(n) time complexity
Space complexity is determined by the max depth of the recursion stack. O(n) in the worst case. If using the alternate solution implementing a stack, the space complexity is O(n) as well. However it is usually lower.
```
function dfs(node, visit) {
    if (node) {
        visit(node);
        node.children.forEach(function (child) {
            dfs(child, visit);
        });
    }
}

function preorderTraversal(root) {
    let solution = [];
    dfs(root, function (node) {
        solution.push(node.val);
    });
    return solution;
}

let result = preorderTraversal(root);
```
