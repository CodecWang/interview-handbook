function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function exists(root, level, k) {
  let bits = 1 << (level - 1);
  let current = root;

  while (current && bits > 0) {
    if (bits & k) current = current.right;
    else current = current.left;
    bits >>= 1;
  }
  return current;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;

  let level = 0;
  let current = root;
  while (current) {
    level++;
    current = current.left;
  }

  let low = 1 << (level - 1);
  let high = (1 << level) - 1;
  while (low < high) {
    const mid = low + parseInt((high - low + 1) / 2);
    if (exists(root, level - 1, mid)) low = mid;
    else high = mid - 1;
  }

  return low;
};

const node = new TreeNode(1);
// node.left = new TreeNode(2);
// node.left.left = new TreeNode(4);
// node.left.right = new TreeNode(5);
// node.right = new TreeNode(3);
// node.right.left = new TreeNode(6);
console.log(countNodes(node));
