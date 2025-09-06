/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const previous = nums[i - 1];
    if (previous !== current) {
      nums[k] = current;
      k++;
    }
  }

  return k;
};