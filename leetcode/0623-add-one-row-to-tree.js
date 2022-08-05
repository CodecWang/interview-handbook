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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root, null);
  }

  const stack = [root];
  while (stack.length) {
    depth--;
    const n = stack.length;
    for (let i = 0; i < n; i++) {
      const node = stack.shift();
      const left = node.left;
      const right = node.right;
      if (depth === 1) {
        node.left = new TreeNode(val, left, null);
        node.right = new TreeNode(val, null, right);
      } else {
        if (left) stack.push(left);
        if (right) stack.push(right);
      }
    }
  }

  return root;

  // 官方 dfs 法：
  // if (!root) return null;
  // if (depth === 1) return new TreeNode(val, root, null);

  // if (depth === 2) {
  //   root.left = new TreeNode(val, root.left, null);
  //   root.right = new TreeNode(val, null, root.right);
  // } else {
  //   root.left = addOneRow(root.left, val, depth - 1);
  //   root.right = addOneRow(root.right, val, depth - 1);
  // }

  // return root;
};
