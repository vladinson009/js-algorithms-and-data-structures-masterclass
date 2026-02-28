//! ✔ Time Complexity: O(M + N)
//! ✔ Space Complexity: O(N)
function constructNote(message, letters) {
  // add whatever parameters you deem necessary - good luck!

  const dictonary = {};

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    dictonary[letter] = (dictonary[letter] || 0) + 1;
  }
  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    if (dictonary[letter] > 0) {
      dictonary[letter]--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(
  constructNote('aa', 'abc'), // false
);
console.log(
  constructNote('abc', 'dcba'), // true
);
console.log(
  constructNote('aabbcc', 'bcabcaddff'), // true
);
