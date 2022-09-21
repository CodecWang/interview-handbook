function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 使用 dummy node
  const dummy = new ListNode(-1, head);
  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;

  // 不使用 dummy node
  // let slow = head;
  // let fast = head;
  // let k = n + 1;

  // while (k-- && fast) {
  //   fast = fast.next;
  // }

  // if (k !== -1) {
  //   return head.next;
  // }

  // while (fast) {
  //   slow = slow.next;
  //   fast = fast.next;
  // }

  // slow.next = slow.next.next;
  // return head;
};
