//! Time Complexity - O(n)
function findAllDuplicates(array) {
  // add whatever parameters you deem necessary - good luck!

  const dictonary = {};
  const duplicatedArray = [];

  for (let number of array) {
    if (dictonary[number]) {
      duplicatedArray.push(number);
    } else {
      dictonary[number] = 1;
    }
  }
  return duplicatedArray;
}
console.log(
  findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), // array with 2 and 3
);
console.log(
  findAllDuplicates([4, 3, 2, 1, 0]), // []
);
console.log(
  findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]), // array with 3, 2, and 1
);
