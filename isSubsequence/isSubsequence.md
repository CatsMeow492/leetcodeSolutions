# Problem
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
# Intuition
It will be important that s and t are not empty and that the length of t is greater than s. The order of the charectors will also be very important. If s[i] == t[j] then we can increment both i and j. If s[i] != t[j] then we can only increment j. If we reach the end of s then we know that s is a subsequence of t. If we 
reach the end of t and s[i] != t[j] then we know that s is not a subsequence of t.
# Approach
Handle the edge cases. Create two pointers i and j. Increment i if s[i] == t[j]. Increment j if s[i] != t[j]. If i == len(s) then we know that s is a subsequence of t. If j == len(t) and s[i] != t[j] then we know that s is not a subsequence of t.
# Psuedocode
if s == "" or t == "":
    return False
if len(s) > len(t):
    return False
i = 0
j = 0
while i < len(s) and j < len(t):
    if s[i] == t[j]:
        i += 1
    j += 1
# Notes on Solution
# Algorithm