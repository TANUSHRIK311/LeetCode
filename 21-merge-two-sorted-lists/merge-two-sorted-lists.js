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
    // Create a dummy node to serve as the head of the merged list
    // This avoids edge cases with an initially empty list
    let dummy = new ListNode(0);
    let current = dummy;

    // Traverse both lists as long as they have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            // If list1's current node is smaller, attach it to the merged list
            current.next = list1;
            list1 = list1.next;
        } else {
            // If list2's current node is smaller, attach it to the merged list
            current.next = list2;
            list2 = list2.next;
        }
        // Move the current pointer forward in the merged list
        current = current.next;
    }

    // Attach the remaining nodes from whichever list is not empty
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // The merged list starts from the next node of the dummy head
    return dummy.next;
};
