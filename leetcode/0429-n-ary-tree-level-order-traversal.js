/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const queue = [root];

  while (queue.length) {
    let n = queue.length;
    const temp = [];
    for (i = 0; i < n; i++) {
      const node = queue.shift();
      temp.push(node.val);
      node.children.forEach((ch) => ch && queue.push(ch));
    }
    ans.push(temp);
  }

  return ans;
};
