/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 我的方法
  // let index = 0;
  // let previous = null;
  // let tail = null;
  // let leftNode = null;
  // const dummy = new ListNode(-1, head);
  // let current = dummy;
  // while (current) {
  //   if (index === left - 1) leftNode = current;
  //   if (index >= left && index <= right) {
  //     const temp = current.next;
  //     current.next = previous;
  //     previous = current;
  //     current = temp;
  //     if (index === left) tail = previous;
  //     if (index === right) {
  //       tail.next = current;
  //     }
  //   } else current = current.next;
  //   index++;
  // }
  // leftNode.next = previous;
  // return dummy.next;

  const dummy = new ListNode(-1, head);
  let pre = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let current = pre.next;
  let tail = pre.next;
  let previous = null;
  for (let i = left; i <= right; i++) {
    const temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
    if (i === right) tail.next = current;
  }
  pre.next = previous;
  return dummy.next;
};
