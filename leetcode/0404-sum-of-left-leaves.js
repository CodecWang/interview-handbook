function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  const isLeafNode = (node) => {
    return !node.left && !node.right;
  };

  const dfs = (node) => {
    let sum = 0;

    if (node.left) {
      sum += isLeafNode(node.left) ? node.left.val : dfs(node.left);
    }
    if (node.right) {
      sum += dfs(node.right);
    }

    return sum;
  };

  return dfs(root);
};

const node = new TreeNode(null);
// node.left = new TreeNode(2);
// node.left.left = new TreeNode(4);
// node.left.right = new TreeNode(5);
// node.right = new TreeNode(3);
// node.right.left = new TreeNode(6);
console.log(sumOfLeftLeaves(node));
