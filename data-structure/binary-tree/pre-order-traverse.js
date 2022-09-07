function preOrderTraverse(root) {
  const dfs = (node, array) => {
    if (!node) return;

    array.push(node.val);
    dfs(node.left, array);
    dfs(node.right, array);
  };

  const ans = [];
  dfs(root, ans);
  return ans;
}

function preOrderTraverse(root) {
  if (!root) return [];
  const ans = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();
    ans.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return ans;
}
