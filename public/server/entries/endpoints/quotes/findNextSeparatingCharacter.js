import getMinNotFalse from "./getMinNotFalse.js";
const findNextSeparatingCharacter = (text) => {
  console.log(`\u{1F680} ~ file: findNextSeparatingCharacter.js ~ line 4 ~ findNextSeparatingCharacter ~ text`, text);
  let separators = [
    { "name": "title", "openingChar": ",", "closingChar": ",", "value": false },
    { "name": "source", "openingChar": "[", "closingChar": "]", "value": false },
    { "name": "axiom", "openingChar": ":", "closingChar": "", "value": false },
    { "name": "year", "openingChar": "(", "closingChar": ")", "value": false },
    { "name": "context", "openingChar": "@", "closingChar": ")", "value": false },
    { "name": "tags", "openingChar": "#", "closingChar": "", "value": false }
  ];
  separators.forEach((separator) => {
    separator.value = text.indexOf(separator.openingChar);
  });
  return getMinNotFalse(separators);
};
export { findNextSeparatingCharacter as default };
