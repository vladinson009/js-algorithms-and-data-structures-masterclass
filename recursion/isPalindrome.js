// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) {
    return true;
  }
  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  if (firstChar !== lastChar) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(
  isPalindrome('awesome'), // false
);
console.log(
  isPalindrome('foobar'), // false
);
console.log(
  isPalindrome('tacocat'), // true
);
console.log(
  isPalindrome('amanaplanacanalpanama'), // true
);
console.log(
  isPalindrome('amanaplanacanalpandemonium'), // false
);
