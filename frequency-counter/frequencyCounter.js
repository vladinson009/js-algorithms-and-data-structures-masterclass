//! Time: O(N)
function sameFrequency(firstNum, secondNum) {
  // good luck. Add any arguments you deem necessary.
  const first = firstNum.toString();
  const second = secondNum.toString();

  const firstFrequency = {};
  const secondFrequency = {};

  for (let el of first) {
    firstFrequency[el] = (firstFrequency[el] || 0) + 1;
  }
  for (let el of second) {
    secondFrequency[el] = (secondFrequency[el] || 0) + 1;
  }

  for (let key in firstFrequency) {
    if (firstFrequency[key] !== secondFrequency[key]) {
      return false;
    }
  }
  return true;
}
console.log(
  sameFrequency(182, 281), // true
);
console.log(
  sameFrequency(34, 14), // false
);
console.log(
  sameFrequency(3589578, 5879385), // true
);
console.log(
  sameFrequency(22, 222), // false
);
