/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    const total = digits[i] + carry;
    digits[i] = total % 10;
    carry = total >= 10 ? 1 : 0;
    if (!carry) {
      break;
    }
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};