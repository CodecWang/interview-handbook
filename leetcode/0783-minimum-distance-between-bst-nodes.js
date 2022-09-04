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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let ans = Infinity;
  let last = null;
  const stack = [];
  let current = root;
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop();
    last !== null && (ans = Math.min(node.val - last, ans));
    last = node.val;
    current = node.right;
  }

  return ans;
};
