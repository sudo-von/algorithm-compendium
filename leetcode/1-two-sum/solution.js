/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;
    if (cache.hasOwnProperty(complement)) {
      return [i, cache[complement]];
    }
    cache[current] = i;
  }
};