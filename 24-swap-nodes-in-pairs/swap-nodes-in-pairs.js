function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var swapPairs = function(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = first.next;

    // swap
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // move prev forward
    prev = first;
  }

  return dummy.next;
};
