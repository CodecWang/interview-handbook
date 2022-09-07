function postOrderTraverse(root) {
  const dfs = (node, array) => {
    if (!node) return;

    dfs(node.left, array);
    dfs(node.right, array);
    array.push(node.val);
  };

  const ans = [];
  dfs(root, ans);
  return ans;
}

function postOrderTraverse(root) {
  if (!root) return [];
  const ans = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    ans.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return ans.reverse();
}
