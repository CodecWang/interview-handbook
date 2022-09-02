/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  // const dfs = (node, array) => {
  //   if (!node) return;
  //   array.push(node.val);

  //   node.children.forEach((ch) => dfs(ch, array));
  // };
  // const ans = [];
  // dfs(root, ans);
  // return ans;

  if (!root) return [];
  const ans = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    ans.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      const n = node.children[i];
      n && stack.push(n);
    }
  }

  return ans;
};
