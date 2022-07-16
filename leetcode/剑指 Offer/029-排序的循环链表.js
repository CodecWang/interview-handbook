function Node(val, next) {
  this.val = val;
  this.next = next;
}

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  const node = new Node(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }

  let res = head;
  let current = head;

  while (current.next !== head) {
    if (current.val <= insertVal && current.next.val >= insertVal) {
      break;
    }
    if (
      current.val > current.next.val &&
      (insertVal > current.val || insertVal < current.next.val)
    ) {
      break;
    }
    current = current.next;
  }

  node.next = current.next;
  current.next = node;
  return res;
};

const node = new Node(3);
node.next = node;
// node.next = new Node(3);
// node.next.next = new Node(5);
// node.next.next.next = node;
console.log(insert(node, 0));
