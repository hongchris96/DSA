function minChange(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let numCoins = [];
    for (coin of coins) {
        if (coin <= amount) numCoins.push(minChange(coins, amount - coin, memo) + 1);
    }

    memo[amount] = Math.min(...numCoins);
    return memo[amount];
}