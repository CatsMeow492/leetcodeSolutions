# Problem
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
# Intuition
Order is likely uninmportant. In order to form a palindrom only one 
letter can have an odd number of occurances. The rest of the letters
must have an even number of occurances. 
# Approach
The algorithm should select
the letter with an odd number of occurances that occurs the most and 
drop all other letters with an odd number of occurances. The algorithm
should then add half the total number of occurances of the even letter to
the beginning and end of the string. The algorithm should then return the
result.
# Psuedocode
create a map of the string
for each letter in the map
    if the letter has an odd number of occurances
        add the letter to the beginning and end of the string
        remove the letter from the map
    else
        add half the number of occurances to the beginning and end of the string
        remove the letter from the map
# Notes on solution


# Algorithm
