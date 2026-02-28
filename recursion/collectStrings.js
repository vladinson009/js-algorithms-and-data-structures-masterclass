function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    const current = obj[key];

    if (typeof current === 'string') {
      result.push(current);
    } else {
      const arr = collectStrings(current);
      result.push(...arr);
    }
  }

  return result;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(
  collectStrings(obj), // ["foo", "bar", "baz"])
);
