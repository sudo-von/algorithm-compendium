/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = 0;
  for (let i = 0; i < candies.length; i++) {
    const currentCandies = candies[i];
    if (currentCandies > maxCandies) maxCandies = currentCandies;
  }
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    const currentCandies = candies[i] + extraCandies;
    result.push(currentCandies >= maxCandies);
  }
  return result;
};