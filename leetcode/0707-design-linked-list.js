// 方法一：单链表方式
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var MyLinkedList = function () {
  this.size = 0;
  this.head = undefined;
  this.tail = undefined;
};

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) return null;

  let current = this.head;
  while (index--) {
    current = current.next;
  }
  return current;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  return this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = new ListNode(val, this.head);
  this.size++;
  if (!this.tail) this.tail = this.head;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);
  this.size++;
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = this.tail = node;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) this.addAtHead(val);
  else if (index > this.size) return;
  else if (index === this.size) this.addAtTail(val);
  else {
    const current = this.getNode(index - 1);
    current.next = new ListNode(val, current.next);
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  this.size--;
  if (index === 0) {
    this.head = this.head.next;
    if (this.size === 0) this.tail = this.head;
  } else {
    const node = this.getNode(index - 1);
    node.next = node.next.next;
    if (this.size === index) this.tail = node;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
