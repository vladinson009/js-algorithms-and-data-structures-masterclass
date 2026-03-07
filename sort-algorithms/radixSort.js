function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let mostDigits = 0;
  for (const value of arr) {
    mostDigits = Math.max(mostDigits, digitCount(value));
  }
  return mostDigits;
}
function radixSort(nums) {
  const maxDigitsCount = mostDigits(nums);

  for (let k = 0; k < maxDigitsCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);

      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort([1, 5, 54, 12, 54, 2, 455, 32, 5311]));
