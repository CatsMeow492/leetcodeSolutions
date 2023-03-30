# Problem
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
# Intuition
# Approach
Here's a high-level approach to solve this problem:

1.) If the lengths of s and t are different, return false, because they can't be isomorphic.
2.) Create two dictionaries (or objects in JavaScript) to store the mappings from characters in s to characters in t and vice versa.
3.) Iterate through the characters of both strings simultaneously.
4.) Check if there is a mapping in both dictionaries for the current pair of characters.
5.) If there are no mappings, add the pair of characters to both dictionaries.
6.) If there are mappings, compare the mapped characters with the current characters. If they don't match, return false.
7.) If the loop completes without finding a mismatch, return true.
# Psuedocode

# Notes on Solution
# Algorithm
Iteration
Time Complexity: O(n)
Space Complexity: O(min(c, n))
where c is the size of the character set