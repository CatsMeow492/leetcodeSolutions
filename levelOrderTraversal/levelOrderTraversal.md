# Problem
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
# Intuition
# Approach
Create an empty queue and push the root node of the tree onto it.
Create an empty result array to store the traversed nodes' values.
While the queue is not empty, perform the following steps:
a. Determine the number of nodes at the current level.
b. Create a temporary array to store the values of nodes at the current level.
c. For each node at the current level, dequeue the node, add its value to the temporary array, and enqueue its left and right children if they exist.
d. Add the temporary array to the result array.
Return the result array.
# Psuedocode
# Notes on Solution
# Algorithm
Breadth-First Search