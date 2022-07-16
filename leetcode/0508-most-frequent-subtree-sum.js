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
var findFrequentTreeSum = function (root) {
  let sumMap = new Map();
  let max = 0;

  const traverse = (node) => {
    if (!node) {
      return 0;
    }

    const leftSum = traverse(node.left);
    const rightSum = traverse(node.right);
    const sum = leftSum + rightSum + node.val;
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    max = Math.max(max, sumMap.get(sum));
    return sum;
  };

  traverse(root);

  let res = [];
  for (const [key, value] of sumMap) {
    if (value === max) {
      res.push(key);
    }
  }

  return res;
};
