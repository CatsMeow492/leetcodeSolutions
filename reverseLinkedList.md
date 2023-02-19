# Problem
Given the head of a singly linked list, reverse the list, and return the reversed list.
# Intuition
A list is essentially an array of nodes, each node has a value and a pointer to the next node. We can use this to our advantage by iterating through the list and storing the values in an array. We can then iterate through the array in reverse order and create a new list with the values in the array.
# Approach
We can iterate through the list and store the values in an array. We can then iterate through the array in reverse order and create a new list with the values in the array. We'll iterate through the list using a pointer and store the values in an array. We'll then iterate through the array in reverse order and create a new list with the values in the array.
# Psuedocode
for each node in list
    push node.value to array
for each value in array in reverse order
    create new node with value
    if head is null
        head = new node
    else
        current.next = new node
        current = current.next
