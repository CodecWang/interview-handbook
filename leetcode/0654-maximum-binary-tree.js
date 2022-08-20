/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // if (!nums.length) return null;

  // let maxIndex = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] > nums[maxIndex]) maxIndex = i;
  // }

  // const node = new TreeNode(nums[maxIndex]);
  // node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  // node.right = constructMaximumBinaryTree(
  //   nums.slice(maxIndex + 1, nums.length)
  // );

  // return node;

  // 更好的方式：使用单调栈
  const n = nums.length;
  const stack = [];
  const nodes = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    nodes[i] = new TreeNode(nums[i]);
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      nodes[i].left = nodes[stack[stack.length - 1]];
      stack.pop();
    }

    if (stack.length) {
      nodes[stack[stack.length - 1]].right = nodes[i];
    }

    stack.push(i);
  }

  return nodes[stack[0]];
};
