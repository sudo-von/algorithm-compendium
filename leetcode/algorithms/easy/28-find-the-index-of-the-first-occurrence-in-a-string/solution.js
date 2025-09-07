/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    const window = haystack.substring(i, i + m);
    if (window === needle) return i;
  }

  return -1;
};