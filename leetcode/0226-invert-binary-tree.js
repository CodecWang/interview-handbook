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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归法
  // if (!root) return root;
  // const left = invertTree(root.left);
  // const right = invertTree(root.right);
  // root.left = right;
  // root.right = left;
  // return root;

  // dfs
  // if (!root) return root;
  // const stack = [root];
  // while (stack.length) {
  //   const node = stack.pop();
  //   [node.left, node.right] = [node.right, node.left];
  //   if (node.left) stack.push(node.left);
  //   if (node.right) stack.push(node.right);
  // }
  // return root;

  // bfs
  if (!root) return root;
  const queue = [root];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      [node.left, node.right] = [node.right, node.left];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};
