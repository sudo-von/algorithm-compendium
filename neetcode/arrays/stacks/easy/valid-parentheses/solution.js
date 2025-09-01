const closeToOpen = {
  ")": "(",
  "]": "[",
  "}": "{",
};

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];

    for (const character of s) {
      if (closeToOpen[character]) {
        const lastCharacter = stack.pop();
        if (lastCharacter !== closeToOpen[character]) {
          return false;
        }
      } else {
        stack.push(character);
      }
    }

    return stack.length === 0;
  }
}
