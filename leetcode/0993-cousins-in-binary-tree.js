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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let lastNode = null;

  const queue = [[root, null]];
  let depth = 0;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const [node, parent] = queue.shift();
      if (node.val === x || node.val === y) {
        if (lastNode) {
          const [k, p] = lastNode;
          return k === depth && p !== parent;
        } else lastNode = [depth, parent];
      }
      if (node.left) queue.push([node.left, node.val]);
      if (node.right) queue.push([node.right, node.val]);
    }
    depth++;
  }
};
