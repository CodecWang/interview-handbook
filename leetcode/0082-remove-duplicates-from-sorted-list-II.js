function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // my code
  // let tree = new ListNode(-101);
  // tree.next = head;
  // let current = tree;

  // while (current && current.next && current.next.next) {
  //   let re = false;
  //   while (current.next.next && current.next.val === current.next.next.val) {
  //     current.next.next = current.next.next.next;
  //     re = true;
  //   }
  //   if (re) {
  //     current.next = current.next.next;
  //   } else {
  //     current = current.next;
  //   }
  // }

  // return tree.next;

  // my code optimized
  let dummy = new ListNode(0, head);
  let current = dummy;

  while (current && current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const value = current.next.val;
      while (current.next && current.next.val === value) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};

const node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(2);
node.next.next.next = new ListNode(3);
node.next.next.next.next = new ListNode(4);
console.log(deleteDuplicates(node));
