/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let stack = [];
  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  current = head;
  console.log("current: ", current, head);
  while (current) {
    if (stack.pop() !== current.val) {
      return false;
    }
    current = current.next;
  }

  return true;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node = new ListNode(10);
node.next = new ListNode(20);
node.next.next = new ListNode(20);
node.next.next.next = new ListNode(10);
// node.next.next = new ListNode(30);
// node.next.next = new ListNode(30);
console.log(isPalindrome(node));
