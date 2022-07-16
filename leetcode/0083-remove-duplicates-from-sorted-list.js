function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else current = current.next;
  }

  return head;
};

const node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(2);
node.next.next.next = new ListNode(3);
node.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(node));
