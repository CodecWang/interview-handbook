function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  // my method: too complicated
  // let max = 0;
  // let leafNodes = [];

  // const calcRec = (node, depth, direction) => {
  //   if (!node) {
  //     return;
  //   }

  //   if (node.left === null && node.right === null) {
  //     if (depth >= max) {
  //       max = depth;
  //     }
  //     leafNodes.push([node.val, depth, direction]);
  //   }

  //   calcRec(node.left, depth + 1, 0);
  //   calcRec(node.right, depth + 1, 1);
  // };

  // calcRec(root, 1, 0);
  // const res = [];
  // for (const item of leafNodes) {
  //   if (item[1] === max) {
  //     res.push(item);
  //   }
  // }

  // for (const item of res) {
  //   if (item[2] === 0) {
  //     return item[0];
  //   }
  // }
  // return res[0][0];

  // using post-order traverse: left is always the first to be visited
  let maxDepth = 0;
  let ans = root.val;

  const dfs = (node, depth) => {
    if (!node) {
      return;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);

    if (depth > maxDepth) {
      maxDepth = depth;
      ans = node.val;
    }
  };

  dfs(root, 0);
  return ans;
};

const tree = new TreeNode(1);
// tree.left = new TreeNode(2);
// tree.left.left = new TreeNode(4);

// tree.right = new TreeNode(3);
// tree.right.left = new TreeNode(5);
// tree.right.left.left = new TreeNode(7);
// tree.right.right = new TreeNode(6);

console.log(findBottomLeftValue(tree));
