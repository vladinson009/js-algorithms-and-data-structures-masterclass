function minCoinChange(coins, amount) {
  const result = [];
  let rest = amount;
  let i = coins.length - 1;

  while (rest > 0 && i >= 0) {
    if (rest - coins[i] < 0) {
      i--;
    } else {
      rest -= coins[i];
      result.push(coins[i]);
    }
  }
  return result;
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11)); // this should return: [5, 5, 1]
console.log(minCoinChange([5, 10, 15, 20, 25], 85)); // this should return: [25, 25, 25, 10]
console.log(minCoinChange([1, 5, 6, 9], 11)); // this should return: [9, 1, 1]
