/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let leftPart = new ListNode(-1);
  let rightPart = new ListNode(-1);
  let p = leftPart;
  let q = rightPart;

  while (head) {
    if (head.val < x) {
      p.next = head;
      p = p.next;
    } else {
      q.next = head;
      q = q.next;
    }
    head = head.next;
  }

  q.next = null;
  p.next = rightPart.next;
  return leftPart.next;
};
