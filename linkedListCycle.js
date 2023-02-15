function hasCycle(head) {
    let slow = head;
    let fast = head;
    let current = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        while (current !== slow) {
          current = current.next;
          slow = slow.next;
        }
        return current;
      }
    }
  
    return null;
  }

  // test cases
console.log(hasCycle([3,2,0,-4]))
console.log(hasCycle([1,2]))
console.log(hasCycle([1]))