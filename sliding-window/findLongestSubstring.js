function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!

  if (str.length === 0) {
    return 0;
  }

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring(''); // 0
console.log(
  findLongestSubstring('thisisawesome'), // 6
);

console.log(
  findLongestSubstring('rithmschool'), // 7
);

console.log(
  findLongestSubstring('thecatinthehat'), // 7
);

findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
