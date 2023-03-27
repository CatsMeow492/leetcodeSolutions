# Problem
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
# Intuition
This seems like an iteration problem.
# Approach
Iterate through the array until you find the target. Then return the indexOf() the target.
# Psuedocode
for each element in the array
    if the element is equal to the target
        return the index of the element
# Notes on Solution
# Algorithm