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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // using recursion
  // const dfs = (node1, node2) => {
  //   if (!node1 && !node2) return true;
  //   if (!node1 || !node2) return false;

  //   return (
  //     node1.val === node2.val &&
  //     dfs(node1.right, node2.left) &&
  //     dfs(node1.left, node2.right)
  //   );
  // };

  // return dfs(root.left, root.right);

  // using iteration
  // 确定遍历方式：前序遍历
  const stack = [root.left, root.right];
  while (stack.length) {
    const node1 = stack.pop();
    const node2 = stack.pop();

    if (!node1 && !node2) continue;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    stack.push(node1.left);
    stack.push(node2.right);
    stack.push(node1.right);
    stack.push(node2.left);
  }
  return true;
};
