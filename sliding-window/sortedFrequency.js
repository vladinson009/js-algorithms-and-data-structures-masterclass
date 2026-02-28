function sortedFrequency(arr, num) {
  const firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx;
  const lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;

  function findFirst(arr, num, low = 0, hight = arr.length - 1) {
    if (hight >= low) {
      const mid = Math.floor((low + hight) / 2);
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, hight);
      } else {
        return findFirst(arr, num, low, mid - 1);
      }
    }
    return -1;
  }
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2);
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1);
      } else {
        return findLast(arr, num, mid + 1, high);
      }
    }
    return -1;
  }
}

console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2), // 4
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3), // 1
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1), // 2
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4), // -1
);
