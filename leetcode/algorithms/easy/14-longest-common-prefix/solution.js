/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let [commonPrefix] = strs;

  if (strs.length === 1) return commonPrefix;

  for (let i = 1; i < strs.length; i++) {
    const current = strs[i];
    while (!current.startsWith(commonPrefix)) {
      commonPrefix = commonPrefix.slice(0, -1);
      if (commonPrefix === "") return "";
    }
  }

  return commonPrefix;
};