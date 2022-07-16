function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }

  const queue = [root];
  while (queue.length) {
    const level = queue.length;
    let max = -Infinity;
    for (let i = 1; i <= level; i++) {
      const node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(max);
  }
  return ans;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

console.log(largestValues(tree));
