class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  removeDuplicates(nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
      const current = nums[i];
      const previous = nums[i - 1];
      if (current !== previous) {
        nums[k] = current;
        k++;
      }
    }
    return k;
  }
}
