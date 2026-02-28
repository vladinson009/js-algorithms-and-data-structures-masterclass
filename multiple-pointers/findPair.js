// Time: O(n log n)
// Space: O(1)
// function findPair(arr, num) {
//   if (arr.length === 0) {
//     return false;
//   }
//   num = Math.abs(num);
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = 1;

//   while (right < arr.length) {
//     const leftNum = arr[left];
//     const rightNum = arr[right];
//     const diff = rightNum - leftNum;

//     const isPair = diff === num;
//     if (left !== right && isPair) {
//       return true;
//     }

//     if (diff < num) {
//       right++;
//     } else {
//       left++;
//     }

//     if (left === right) {
//       right++;
//     }
//   }
//   return false;
// }

// (O(n) time | O(n) space)
function findPair(arr, n) {
  if (arr.length === 0) {
    return false;
  }
  n = Math.abs(n);

  const seen = new Set();

  for (let value of arr) {
    if (seen.has(value - n) || seen.has(value + n)) {
      return true;
    }
    seen.add(value);
  }

  return false;
}

console.log(
  findPair([6, 1, 4, 10, 2, 4], 2), // true
);

// findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true
// findPair([4, -2, 3, 10], -6); // true
// findPair([6, 1, 4, 10, 2, 4], 22); // false
// findPair([], 0); // false
// findPair([5, 5], 0); // true
// findPair([-4, 4], -8); // true
// findPair([-4, 4], 8); // true
// findPair([1, 3, 4, 6], -2); // true
// findPair([0, 1, 3, 4, 6], -2); // true
// findPair([1, 2, 3], 0); // false
