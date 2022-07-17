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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // let set = new Set();
  // let ans = false;

  // const dfs = (node) => {
  //   if (!node) return;

  //   if (set.has(node.val)) ans = true;
  //   else {
  //     set.add(k - node.val);
  //     dfs(node.left);
  //     dfs(node.right);
  //   }
  // };

  // dfs(root);
  // return ans;

  // BST 特性：中序遍历是有序的，所以可以利用双指针
  const arr = [];

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === k) return true;
    if (sum > k) right--;
    else left++;
  }

  return false;
};
