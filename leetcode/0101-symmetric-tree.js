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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // using recursion
  // function isMirror(p, q) {
  //   if (p === null && q === null) return true;
  //   if (p === null || q === null) return false;
  //   if (p.val !== q.val) return false;

  //   return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  // }

  // return isMirror(root.left, root.right);

  // using iteration
  const queue = [root.left, root.right];

  while (queue.length) {
    const first = queue.shift();
    const second = queue.shift();

    if (!first && !second) continue;
    if (!first || !second || first.val !== second.val) return false;

    queue.push(first.left);
    queue.push(second.right);

    queue.push(first.right);
    queue.push(second.left);
  }

  return true;
};
