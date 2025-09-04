/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let counter = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = s[i];
    if (current === " ") {
      if (counter === 0) continue;
      return counter;
    }
    counter++;
  }

  return counter;
};