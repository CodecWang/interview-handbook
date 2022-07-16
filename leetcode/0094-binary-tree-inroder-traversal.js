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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 使用递归方式
  // const ret = [];
  // traverse(root);

  // function traverse(root) {
  //   if (root === null) {
  //     return;
  //   }

  //   traverse(root.left);
  //   ret.push(root.val);
  //   traverse(root.right);
  // }

  // return ret;

  // 循环迭代方式
  const ret = [];
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    ret.push(node.val);
    node = node.right;
  }

  return ret;
};
