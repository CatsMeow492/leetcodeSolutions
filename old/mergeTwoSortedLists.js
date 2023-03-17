/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // If list1 is null return list2
    if (list1 == null) {
        return list2
    }
    // If list2 is null return list1
    else if (list2 == null) {
        return list1
    }
    // If list1.val is less than list2.val
    else if (list1.val < list2.val) {
        // Set list1.next to the return of mergeTwoLists(list1.next, list2)
        list1.next = mergeTwoLists(list1.next, list2)
        // Return list1
        return list1
    }
    // If list2.val is less than list1.val
    else {
        // Set list2.next to the return of mergeTwoLists(list1, list2.next)
        list2.next = mergeTwoLists(list1, list2.next)
        // Return list2
        return list2
    }
};