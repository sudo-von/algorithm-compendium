/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let lastNum1 = m - 1;
  let lastNum2 = n - 1;
  let lastIndex = m + n - 1;

  while (lastNum1 >= 0 && lastNum2 >= 0) {
    if (nums1[lastNum1] > nums2[lastNum2]) {
      nums1[lastIndex] = nums1[lastNum1];
      lastNum1--;
    } else {
      nums1[lastIndex] = nums2[lastNum2];
      lastNum2--;
    }
    lastIndex--;
  }

  while (lastNum2 >= 0) {
    nums1[lastIndex] = nums2[lastNum2];
    lastNum2--;
    lastIndex--;
  }
};