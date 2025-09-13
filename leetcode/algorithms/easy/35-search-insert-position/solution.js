/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = nums[mid];

    if (current === target) {
      return mid;
    }
    if (target < current) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
