function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  // Base case
  if (arr.length === 0) {
    return [];
  }
  // Capitalize first string
  const capitalized = arr[0].toUpperCase();

  // Recursive case
  return [capitalized].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(
  capitalizeWords(words), // ['I', 'AM', 'LEARNING', 'RECURSION']
);
