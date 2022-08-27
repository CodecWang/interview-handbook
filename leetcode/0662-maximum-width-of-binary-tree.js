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
var widthOfBinaryTree = function (root) {
  const queue = [[root, 1n]];
  let ans = 1;

  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const [node, index] = queue.shift();
      if (node.left) queue.push([node.left, index * 2n]);
      if (node.right) queue.push([node.right, index * 2n + 1n]);
    }

    if (queue.length) {
      ans = Math.max(
        Number(queue[queue.length - 1][1] - queue[0][1] + 1n),
        ans
      );
    }
  }

  return ans;
};
