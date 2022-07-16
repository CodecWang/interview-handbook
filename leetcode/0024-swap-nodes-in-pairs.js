function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const tree = new ListNode(-1);
  tree.next = head;

  let previous = tree;
  let current = previous.next;

  while (current && current.next) {
    next = current.next;
    current.next = next.next;
    next.next = current;
    previous.next = next;

    previous = current;
    current = current.next;
  }

  return tree.next;
};

const node = null;
// node.next = new ListNode(2);
// node.next.next = new ListNode(3);
// node.next.next.next = new ListNode(4);
// node.next.next.next.next = new ListNode(5);
console.log(swapPairs(node));
