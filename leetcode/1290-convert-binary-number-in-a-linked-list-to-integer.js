/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  const binaryArray = [];

  let current = head;
  while (current) {
    binaryArray.push(current.val);
    current = current.next;
  }

  let res = 0;
  let count = binaryArray.length - 1;
  for (const n of binaryArray) {
    res += n * Math.pow(2, count);
    count--;
  }

  return res;
};
