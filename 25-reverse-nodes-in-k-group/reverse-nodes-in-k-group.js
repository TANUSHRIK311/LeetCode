function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

var reverseKGroup = function(head, k) {
  if (k === 1 || !head) return head;

  var dummy = new ListNode(0, head);
  var groupPrev = dummy;

  while (true) {
    // find kth node
    var kth = groupPrev;
    for (var i = 0; i < k && kth; i++) {
      kth = kth.next;
    }
    if (!kth) break; // not enough nodes

    var groupNext = kth.next;

    // reverse group
    var prev = groupNext;
    var curr = groupPrev.next;

    while (curr !== groupNext) {
      var temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // reconnect
    var temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }

  return dummy.next;
};
