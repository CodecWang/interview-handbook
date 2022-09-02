/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.tree = [];
  const stack = [];
  let current = root;
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop();
    this.tree.push(node.val);
    current = node.right;
  }
  this.index = -1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.tree[++this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index + 1 < this.tree.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
