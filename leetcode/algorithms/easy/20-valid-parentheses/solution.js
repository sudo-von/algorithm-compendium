/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheses = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (const char of s) {
    if (parentheses.hasOwnProperty(char)) {
      const lastOpen = stack.pop();
      const expectedOpen = parentheses[char];
      if (lastOpen !== expectedOpen) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};