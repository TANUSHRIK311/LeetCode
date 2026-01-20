
//brute force approach
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let curr = head;

    // Pass 1: Find the total length of the list
    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    // Special Case: If n equals length, we are removing the head
    if (n === length) {
        return head.next;
    }

    // Pass 2: Move to the node just BEFORE the one we want to remove
    // The target is at (length - n + 1)
    // We need to stop at (length - n)
    let stepsToMove = length - n - 1;
    curr = head;
    while (stepsToMove > 0) {
        curr = curr.next;
        stepsToMove--;
    }

    // Skip the target node
    curr.next = curr.next.next;

    return head;
};

//optimal two-pointer approach
var removeNthFromEnd = function(head, n) {
    // Step 1: Create a dummy node to handle edge cases like removing the head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let fast = dummy;
    let slow = dummy;

    // Step 2: Move the fast pointer n + 1 steps ahead
    // This creates a gap of n nodes between fast and slow
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Step 3: Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 4: Skip the target node
    // slow is now pointing to the node JUST BEFORE the one we want to remove
    slow.next = slow.next.next;

    // Return the new head (dummy.next handles cases where the original head was removed)
    return dummy.next;
};