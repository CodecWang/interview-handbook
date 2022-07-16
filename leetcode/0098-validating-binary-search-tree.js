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
var isValidBST = function (root) {
  function isBST(tree, min, max) {
    if (tree === null) {
      return true;
    }

    if (tree.val <= min || tree.val >= max) {
      return false;
    }
    return isBST(tree.left, min, tree.val) && isBST(tree.right, tree.val, max);
  }

  return isBST(root, -Infinity, Infinity);
};
