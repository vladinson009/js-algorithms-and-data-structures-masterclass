// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(products) {
  if (products.length === 0) {
    return 1;
  }

  return Number(products[0]) * Number(productOfArray(products.slice(1)));
}

console.log(
  productOfArray([1, 2, 3, 10]), // 60
);
