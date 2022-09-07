function inOrderTraverse(root) {
  const dfs = (node, array) => {
    if (!node) return;

    dfs(node.left, array);
    array.push(node.val);
    dfs(node.right, array);
  };

  const ans = [];
  dfs(root, ans);
  return ans;
}

function inOrderTraverse(root) {
  if (!root) return [];
  const ans = [];
  const stack = [];
  let cur = root;

  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    let node = stack.pop();
    ans.push(node.val);
    cur = node.right;
  }

  return ans;
}
