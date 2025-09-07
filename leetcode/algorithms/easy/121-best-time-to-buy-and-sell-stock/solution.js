/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [minPrice] = prices, maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - minPrice;

    if (profit > maxProfit) maxProfit = profit;
    if (currentPrice < minPrice) minPrice = currentPrice;
  }

  return maxProfit;
};
