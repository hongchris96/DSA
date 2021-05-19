// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo={}) {
    let key = amount + '-' + coins;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    let currentCoin = coins[coins.length - 1];
    let total = 0;
    for (let qt = 0; qt * currentCoin <= amount; qt++) {
        total += change(amount - qt * currentCoin, coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return total;
};



// var change = function(amount, coins) {
//     let dp = Array(amount + 1).fill(0);      // [1, 1, 2, 2, 3, 4]
//     dp[0] = 1;

//   for (let c of coins) {                     // c [1, 2, 5]          5
//     for (let i = 0; i <= amount; i++) {      // i  0,1,2,3,4,5       5
//       if (i >= c) dp[i] += dp[i - c];
//     }
//   }

//   return dp[amount];
// };


// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1