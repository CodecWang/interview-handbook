/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  const dfs = (node) => {
    if (!node) return false;
    const leftSub = dfs(node.left);
    const rightSub = dfs(node.right);
    if (
      (leftSub && rightSub) ||
      node.val === p.val ||
      (node.val === q.val && (leftSub || rightSub))
    ) {
      ans = node;
    }
    return leftSub || rightSub || node.val === p.val || node.val === q.val;
  };

  dfs(root);
  return ans;
};
