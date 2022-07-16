function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const retNode = new ListNode();
  let current = retNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return retNode.next;
};

const n1 = new ListNode(1);
n1.next = new ListNode(2);
n1.next.next = new ListNode(4);

const n2 = new ListNode(1);
n2.next = new ListNode(3);
n2.next.next = new ListNode(4);

console.log(mergeTwoLists(n1, n2));
