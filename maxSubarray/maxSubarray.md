# Problem
Given an integer array nums, find the subarray with the largest sum, and return its sum.
# Intuition
This sounds like a running sum problem where we keep track of the current sum and reset it to 0 if it becomes negative.
# Approach
A really slow solution may be to iterate through the array and for each element iterate through the rest of the array and add the elements together. This would give us a time complexity of O(n^2). A faster solution would be to iterate through the array and keep track of the current sum. If the current sum is less than 0 we can reset the current sum to 0. This would give us a time complexity of O(n).
# Psuedocode
for each element in nums
    if current sum is less than 0
        reset current sum to 0
    add element to current sum
    if current sum is greater than max sum
        set max sum to current sum
# Notes on Solution
# Algorithm