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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let left2Right = true;
  const ans = [];
  const queue = [root];

  while (queue.length) {
    let temp = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (left2Right) temp.push(node.val);
      else temp.unshift(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    left2Right = !left2Right;
    ans.push(temp);
  }
  return ans;
};
