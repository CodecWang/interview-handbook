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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameTree = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (
      node1.val === node2.val &&
      isSameTree(node1.left, node2.left) &&
      isSameTree(node1.right, node2.right)
    );
  };

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.val === subRoot.val) {
      const res = isSameTree(node, subRoot);
      if (res) return true;
    }
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return false;
};
