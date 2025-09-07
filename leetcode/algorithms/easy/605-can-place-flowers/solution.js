/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n; i++) {
    const current = flowerbed[i];
    const isPreviousEmpty = i === 0 || flowerbed[i - 1] === 0;
    const isNextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (current === 0 && isPreviousEmpty && isNextEmpty) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n === 0;
};