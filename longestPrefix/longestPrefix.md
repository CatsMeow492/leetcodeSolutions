# Problem
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
# Intuition
Order of the letters is important
strs is going to be an array
# Approach
Here's a high-level approach to solve this problem: iterate through the array of strings and check if str1[n] = str2[n] = str3[n] = str...[n]. If that statement is true we can append a string with arr1[n].
# Psuedocode
function 
    if str1[0] =! str2[0]
        return false
    for the length of arr1 
        if arr1[n] = arr2[n] = arr3[n] = arr...[n]
            append a string with arr1[n]
            .push(n)
# Notes on Solution
# Algorithm
