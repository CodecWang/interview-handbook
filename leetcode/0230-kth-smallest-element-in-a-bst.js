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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let current = root;
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop();
    k--;
    if (k === 0) return node.val;
    current = node.right;
  }
};
