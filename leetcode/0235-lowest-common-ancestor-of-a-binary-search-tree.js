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
  // 二叉搜索树谨记一点：根据值的大小判断左右节点！！！
  let ret = root;

  while (true) {
    if (ret.val > p.val && ret.val > q.val) {
      ret = ret.left;
    } else if (ret.val < p.val && ret.val < q.val) {
      ret = ret.right;
    } else {
      break;
    }
  }

  return ret;
};
