function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let firstZeroIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      firstZeroIndex = mid;
      right = mid - 1; // look for earlier zero
    } else {
      left = mid + 1;
    }
  }

  if (firstZeroIndex === -1) return 0;

  return arr.length - firstZeroIndex;
}

console.log(
  countZeroes([1, 1, 1, 1, 0, 0]), // 2
);
console.log(
  countZeroes([1, 0, 0, 0, 0]), // 4
);
console.log(
  countZeroes([0, 0, 0]), // 3
);
console.log(
  countZeroes([1, 1, 1, 1]), // 0
);
// 1 1 1 0 0
