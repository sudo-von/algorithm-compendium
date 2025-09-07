/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const formatted = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let p1 = 0;
  let p2 = formatted.length - 1;

  while (p1 < p2) {
    const currentP1 = formatted[p1];
    const currentP2 = formatted[p2];
    if (currentP1 !== currentP2) return false;
    p1++;
    p2--;
  }

  return true;
};