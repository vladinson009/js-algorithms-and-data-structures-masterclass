//! One line approach
function areThereDuplicates() {
  return new Set(Array.from(arguments)).size !== Array.from(arguments).length;
}
// //! Multiple Pointers approach
// function areThereDuplicates() {
//   const array = Array.from(arguments).sort((a, b) => {
//     if (typeof a === 'string') {
//       return a.localeCompare(b);
//     } else {
//       return a - b;
//     }
//   });
//   let i = 0;
//   for (let j = 1; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }

//! Frequency Counter approach
// function areThereDuplicates() {
//   const frequencyCounter = {};

//   for (let value of Array.from(arguments)) {
//     frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
//   }
//   for (let key in frequencyCounter) {
//     if (frequencyCounter[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }
console.log(
  areThereDuplicates(1, 2, 3), // false
);
console.log(
  areThereDuplicates(1, 2, 2), // true
);
console.log(
  areThereDuplicates('a', 'b', 'c', 'a'), // true
);
