function binarySearch(arr, match) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let middleIdx = Math.floor((startIdx + endIdx) / 2);

  while (startIdx <= endIdx) {
    const middle = arr[middleIdx];
    if (middle === match) {
      return middleIdx;
    } else if (middle < match) {
      startIdx = middleIdx + 1;
    } else if (middle > match) {
      endIdx = middleIdx - 1;
    }
    middleIdx = Math.floor((startIdx + endIdx) / 2);
  }
  return -1;
}
//                                 S  M  E
console.log(binarySearch([1, 2, 3, 4, 5, 6], 61));
