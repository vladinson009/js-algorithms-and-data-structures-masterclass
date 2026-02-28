function minSubArrayLen(arr, reqSum) {
  let total = 0;
  let minLength = Infinity;
  let start = 0;
  let end = 0;

  while (start < arr.length) {
    if (total < reqSum && end < arr.length) {
      // check if end is < arr.length
      // Add to Sum next element
      // increment end
      total += arr[end];
      end++;
    } else if (total >= reqSum) {
      // minLenth = end - start or minLength
      // subtract arr[start] from the total to meet first if statement
      // increment start++
      minLength = Math.min(end - start, minLength);
      total -= arr[start];
      start++;
    } else {
      // Break the while loop if does not meet the conditions above
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
console.log(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
);

minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
