const getMinNotFalse = (separators) => {
  const charsFound = separators.filter((sep) => sep.value > -1);
  console.log(`\u{1F680} ~ file: getMinNotFalse.js ~ line 4 ~ getMinNotFalse ~ charsFound`, charsFound);
  if (!charsFound.length) {
    return false;
  }
  let max = { value: 0 };
  charsFound.forEach((sep) => {
    sep.value > max.value ? max = sep : max;
  });
  let min = max;
  charsFound.forEach((sep) => {
    sep.value < min.value ? min = sep : min;
  });
  console.log(`\u{1F680} ~ file: getMinNotFalse.js ~ line 12 ~ getMinNotFalse ~ min`, min);
  return min;
};
export { getMinNotFalse as default };
