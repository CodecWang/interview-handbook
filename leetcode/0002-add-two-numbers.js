function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const retNode = new ListNode();
  let current = retNode;
  let cover = 0;

  while (l1 || l2) {
    const sum = cover + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    cover = sum >= 10 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    current = current.next;
  }

  if (cover) {
    current.next = new ListNode(1);
  }

  return retNode.next;
};

const n1 = new ListNode(9);
n1.next = new ListNode(9);
// n1.next.next = new ListNode(9);

const n2 = new ListNode(1);
// n2.next = new ListNode(6);
// n2.next.next = new ListNode(4);

console.log(addTwoNumbers(n1, n2));
