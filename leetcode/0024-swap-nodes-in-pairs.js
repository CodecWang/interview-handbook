/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const node = new ListNode(-1, head);
  let previous = node;
  let current = node.next;

  while (current && current.next) {
    const next = current.next;
    current.next = next.next;
    next.next = current;
    previous.next = next;

    previous = current;
    current = current.next;
  }

  return node.next;
};
