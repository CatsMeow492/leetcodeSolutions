# Problem
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
# Intuition
Order and value will be the most important factors in determining the 
maximum profit. 
# Approach
We can likely solve this problem iteratively. By calling a function that
takes in the array and determines the lowest price. Then determining
if there is a price after the index of the lowest price that is higher.
If true we can return the difference between the two prices. If false
we can remove the lowest price and call the function again.
# Psuedocode
for each price in prices
    if price is lowest
        if price is less than next price
            return next price - price
        else
            remove price
            call function again
