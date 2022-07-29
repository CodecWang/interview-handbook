/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 找到中间节点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const l1 = head;
  let l2 = slow.next;
  slow.next = null;

  // 翻转后半部分
  let current = l2;
  let pre = null;
  while (current) {
    const temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  l2 = pre;

  // 拼接
  let p = l1;
  let q = l2;
  while (q) {
    const temp = p.next;
    p.next = q;
    q = temp;
    p = p.next;
  }

  return head;
};
