/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const maxLengthW1 = word1.length, maxLengthW2 = word2.length;
  const maxLength = Math.max(maxLengthW1, maxLengthW2);

  let result = "";
  for (let i = 0; i < maxLength; i++) {
    const currentW1 = word1[i];
    const currentW2 = word2[i];
    if (i < maxLengthW1) result += currentW1;
    if (i < maxLengthW2) result += currentW2;
  }
  return result;
};