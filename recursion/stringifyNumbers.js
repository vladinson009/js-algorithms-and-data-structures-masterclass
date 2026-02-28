function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    const current = obj[key];
    if (typeof current === 'object' && current !== null && !Array.isArray(current)) {
      newObj[key] = stringifyNumbers(current);
    } else if (typeof current === 'number' && !Number.isNaN(current)) {
      newObj[key] = current.toString();
    } else {
      newObj[key] = current;
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));

/*{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
