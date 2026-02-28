function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  // Base case
  if (arr.length === 0) {
    return [];
  }
  // Capitalize first string
  const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);

  // Recursive case
  return [capitalized].concat(capitalizeFirst(arr.slice(1)));
}
console.log(
  capitalizeFirst(['car', 'taco', 'banana']), // ['Car','Taco','Banana']
);
