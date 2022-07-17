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
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // if (!root) return new TreeNode(val);

  // if (root.val < val) root.right = insertIntoBST(root.right, val);
  // else root.left = insertIntoBST(root.left, val);

  // return root;

  // using iteration
  if (!root) return new TreeNode(val);

  let current = root;
  while (current) {
    if (current.val > val) {
      if (!current.left) {
        current.left = new TreeNode(val);
        break;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = new TreeNode(val);
        break;
      }
      current = current.right;
    }
  }

  return root;
};
