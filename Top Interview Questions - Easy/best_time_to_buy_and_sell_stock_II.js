/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let profit = 0;
    let len = prices.length;

    if(len >= 2) {
        for(let i = 1; i < len; i++) {
            if(prices[i] > prices[i-1]) {
                profit += (prices[i] - prices[i - 1]);
            }
        }
    }

    return profit;
};
