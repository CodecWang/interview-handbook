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
var findMode = function (root) {
  let base = 0;
  let count = 0;
  let maxCount = 0;
  let ret = [];

  const traverse = (root) => {
    if (!root) {
      return;
    }

    traverse(root.left);
    if (root.val === base) {
      count++;
    } else {
      base = root.val;
      count = 1;
    }

    if (count === maxCount) {
      ret.push(base);
    }
    if (count > maxCount) {
      maxCount = count;
      ret = [base];
    }

    traverse(root.right);
  };

  traverse(root);
  return ret;
};
