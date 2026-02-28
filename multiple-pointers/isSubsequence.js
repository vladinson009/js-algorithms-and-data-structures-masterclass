// Time Complexity - O(N + M)
// Space Complexity - O(1)
function isSubsequence(firstStr, secondStr) {
  // good luck. Add any arguments you deem necessary.

  let idx = 0;

  for (let j = 0; j < secondStr.length; j++) {
    const letter = secondStr[j];
    if (firstStr[idx] === letter) {
      idx++;
    }
    if (idx === firstStr.length) {
      return true;
    }
  }
  return firstStr.length === idx;
}

console.log(
  isSubsequence('hello', 'hello world'), // true
);
console.log(
  isSubsequence('sing', 'sting'), // true
);
console.log(
  isSubsequence('abc', 'abracadabra'), // true
);
console.log(
  isSubsequence('abc', 'acb'), // false (order matters)
);
