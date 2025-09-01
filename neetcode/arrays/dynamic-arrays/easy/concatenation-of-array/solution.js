class Solution {
  /**
   * @param {number[]} nums
   * @param {number} times
   * @return {number[]}
   */
  getConcatenation(nums, times = 2) {
    const ans = [];
    for (let i = 1; i <= times; i++) {
      for (let j = 0; j < nums.length; j++) {
        const current = nums[j];
        ans.push(current);
      }
    }
    return ans;
  }
}
