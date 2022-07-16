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
var postorderTraversal = function (root) {
  // 递归方式
  // const ret = [];
  // traverse(root);

  // function traverse(root) {
  //   if (root === null) {
  //     return;
  //   }

  //   traverse(root.left);
  //   traverse(root.right);
  //   ret.push(root.val);
  // }

  // return ret;

  // 迭代方式
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
