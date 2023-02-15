# Problem
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
# Intuition
The order of the charectors appearence in the string will likely be the most important factor is succesfully determining if a string is a subsequence of another string. 
# Approach
We can essentially iterate through the string and check if the charector at the current index exists, if true we can splice/slice the array of
the string and continue to the next charector. If false we can return false.
# Psuedocode
for each charector in string t
    if charector s[i] exists
        splice/slice string t
        i++
    else
        return false