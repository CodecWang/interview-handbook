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
var insertIntoMaxTree = function (root, val) {
  // 我的方式：使用迭代
  // let current = root;
  // const stack = [current];

  // while (current.right) {
  //   current = current.right;
  //   stack.push(current);
  // }

  // const node = new TreeNode(val);
  // while (stack.length) {
  //   current = stack.pop();
  //   if (val < current.val) {
  //     current.right = node;
  //     return root;
  //   }
  //   node.left = current;
  // }

  // return node;

  // 方式二：使用递归
  if (!root || root.val < val) return new TreeNode(val, root);

  root.right = insertIntoMaxTree(root.right, val);
  return root;
};
