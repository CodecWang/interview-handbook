/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  // const dfs = (node, array) => {
  //   if (!node) return;

  //   node.children && node.children.forEach((ch) => dfs(ch, array));
  //   array.push(node.val);
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
    node.children.forEach((ch) => ch && stack.push(ch));
  }

  return ans.reverse();
};
