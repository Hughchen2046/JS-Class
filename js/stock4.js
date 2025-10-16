//「Best Time to Buy and Sell Stock IV」

function maxProfit(k, prices) {
  const n = prices.length;
  if (n === 0) return 0;
  if (k >= n / 2) {
    // k 大到足以天天交易 → 同「不限次數」
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
    }
    return profit;
  }

  const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

  for (let t = 1; t <= k; t++) {
    let maxDiff = -prices[0];
    for (let i = 1; i < n; i++) {
      dp[t][i] = Math.max(dp[t][i - 1], prices[i] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[t - 1][i] - prices[i]);
    }
  }

  return dp[k][n - 1];
}

const k = 6;
const prices = [148,14,45,159,46,135,14,186,29,73,145,18,179,51,122,143,197,51,168,60,67,105,95,157,109];
console.log(maxProfit(k, prices));