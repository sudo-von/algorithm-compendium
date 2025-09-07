/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const map = new Map();

  for (let i = 0; i < t.length; i++) {
    const currentT = t[i];
    const currentM = map.get(currentT);
    if (currentM) currentM.push(i);
    else map.set(currentT, [i]);
  }

  let last = -1;
  for (let i = 0; i < s.length; i++) {
    const currentS = s[i];
    const currentM = map.get(currentS);
    if (!currentM) return false;

    let left = 0;
    let right = currentM.length - 1;
    let next = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (currentM[mid] > last) {
        next = currentM[mid];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (next === -1) return false;
    last = next;
  }

  return true;
};