# Problem
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
# Intuition
We will need to iterate through the array and check for each element has 
another element that adds up to target.
# Approach
Nested for loops that iterate through the array and check if the sum of the two numbers is equal to the target.
# Psuedocode
for each element in nums
    for each element in nums
        if the sum of the two elements is equal to target
            return the indices of the two elements
# Notes on Solution
This solution is not very efficient. It has a time complexity of O(n^2).
# Algorithm
Brute Force - Nested for loops that iterate through the array and check if the sum of the two numbers is equal to the target. This gives us a time complexity of O(n^2).
# Alternative Algorithms
Two-Pass Hash Table - We can use a hash table to store the values of the array and their indices. We can then iterate through the array and check if the target minus the current value is in the hash table. If it is we can return the current index and the index of the value in the hash table. This gives us a time complexity of O(n).