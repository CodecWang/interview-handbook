function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const height = (node) => {
    if (!node) return 0;

    const hLeft = height(node.left);
    const hRight = height(node.right);
    if (
      hLeft === -1 ||
      hRight === -1 ||
      hLeft - hRight > 1 ||
      hRight - hLeft > 1
    ) {
      return -1;
    }
    return 1 + Math.max(hLeft, hRight);
  };

  return height(root) >= 0;
};

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.left.left = new TreeNode(3);
node.left.left.left = new TreeNode(4);
node.right = new TreeNode(2);
node.right.right = new TreeNode(3);
node.right.right.right = new TreeNode(4);

console.log(isBalanced(node));
