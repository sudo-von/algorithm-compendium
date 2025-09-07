const regex = /^[aeiouAEIOU]$/;

/**
 * @param {string} s
 * @return {boolean}
 */
var isVowel = function (s) {
  return regex.test(s);
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const chars = s.split('');

  let left = 0, right = s.length - 1;
  while (left < right) {
    const leftChar = s[left];
    const rightCar = s[right];

    if (!isVowel(leftChar)) {
      left++;
      continue;
    }
    if (!isVowel(rightCar)) {
      right--;
      continue;
    }

    [chars[left], chars[right]] = [rightCar, leftChar];
    left++;
    right--;
  }

  return chars.join('');
};