function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // my solution: subtree paths add current root val
  // const treePathRec = (root) => {
  //   if (!root) {
  //     return [];
  //   }
  //   if (!root.left && !root.right) {
  //     return [[root.val]];
  //   }
  //   let lefts = treePathRec(root.left);
  //   let rights = treePathRec(root.right);
  //   lefts.forEach((left) => left.unshift(root.val));
  //   rights.forEach((right) => right.unshift(root.val));
  //   return [...lefts, ...rights];
  // };
  // return treePathRec(root).map((p) => p.join("->"));

  const paths = [];

  const treePathsRec = (root, path) => {
    if (root) {
      path += root.val;
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += "->";
        treePathsRec(root.left, path);
        treePathsRec(root.right, path);
      }
    }
  };

  treePathsRec(root, "");
  return paths;
};

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
// node.left.right = new TreeNode(5);
// node.left.right.left = new TreeNode(7);
// node.left.right.right = new TreeNode(8);

console.log(binaryTreePaths(node));
