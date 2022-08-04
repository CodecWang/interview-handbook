/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const build = (p, left, right) => {
    if (
      p >= preorder.length ||
      left >= inorder.length ||
      right >= inorder.length ||
      right < left
    )
      return null;
    const node = new TreeNode(preorder[p]);
    const index = inorder.indexOf(preorder[p]);

    node.left = build(p + 1, left, index - 1);
    node.right = build(p + index - left + 1, index + 1, right);
    return node;
  };

  return build(0, 0, inorder.length - 1);
};
