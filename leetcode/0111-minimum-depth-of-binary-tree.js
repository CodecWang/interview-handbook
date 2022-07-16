function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  // if (!root) return 0;

  // let min = Infinity;
  // function dfs(node, depth) {
  //   if (!node) return;

  //   if (!node.left && !node.right) {
  //     min = Math.min(min, depth);
  //     return;
  //   }

  //   dfs(node.left, depth + 1);
  //   dfs(node.right, depth + 1);
  // }

  // dfs(root, 1);
  // return min;

  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  let min = Infinity;
  if (root.left) min = Math.min(minDepth(root.left), min);
  if (root.right) min = Math.min(minDepth(root.right), min);

  return min + 1;
};

const node = new TreeNode(2);
node.right = new TreeNode(3);
node.right.right = new TreeNode(4);
node.right.right.right = new TreeNode(5);
node.right.right.right.right = new TreeNode(6);
console.log(minDepth(node));
