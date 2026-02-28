function findRotatedIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // mid = 3
    if (arr[mid] === target) return mid;

    // Check if left half is sorted
    if (arr[left] <= arr[mid]) {
      // if 3 <= 1
      // Target is in left sorted portion?
      if (target >= arr[left] && target < arr[mid]) {
        // if 4 >= 3 && 4 < 1
        right = mid - 1; // right = 2 - 1 = 1
      } else {
        left = mid + 1; // left = 2 + 1 = 3
      }
      //Otherwise right half must be sorted
    } else {
      //Target is in right sorted portion?
      if (target > arr[mid] && target <= arr[right]) {
        // if 4 > 1 && 4 <= 2
        left = mid + 1; // 3
      } else {
        right = mid - 1; // 1
      }
    }
  }
  return -1;

  // add whatever parameters you deem necessary - good luck!
}

console.log(
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8), // 2
);
console.log(
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3), // 6
);
console.log(
  findRotatedIndex([37, 44, 66, 102, 10, 22], 14), // -1
);
console.log(
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12), // -1
);
console.log(
  findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16), // 5
);
