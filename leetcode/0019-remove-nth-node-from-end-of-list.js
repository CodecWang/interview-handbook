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
  let slow = head;
  let fast = head;
  let k = n + 1;

  while (k-- && fast) {
    fast = fast.next;
  }

  if (k !== -1) {
    // throw new Error("n is greater than the length of the node");
    return head.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

const n1 = new ListNode(1);
// n1.next = new ListNode(2);
// n1.next.next = new ListNode(3);

console.log(removeNthFromEnd(n1, 3));
