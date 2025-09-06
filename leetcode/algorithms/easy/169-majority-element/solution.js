/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (count === 0) {
      candidate = current;
    }
    count += candidate === current ? 1 : -1;
  }

  return candidate;
};