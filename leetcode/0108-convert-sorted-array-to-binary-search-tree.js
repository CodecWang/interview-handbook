function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const covert = (nums, left, right) => {
    if (left > right) {
      return null;
    }

    const mid = parseInt((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = covert(nums, left, mid - 1);
    node.right = covert(nums, mid + 1, right);
    return node;
  };

  return covert(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST([1, 3]));
