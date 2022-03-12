import getMinNotFalse from "./getMinNotFalse"

const findNextSeparatingCharacter = (text) => {
// console.log(`🚀 ~ file: findNextSeparatingCharacter.js ~ line 4 ~ findNextSeparatingCharacter ~ text`, text)
    let separators = [
        { "name": "title", "openingChar": ",", "closingChar": ",", "value": false },
        { "name": "source", "openingChar": "[", "closingChar": "]", "value": false },
        { "name": "axiom", "openingChar": ":", "closingChar": "", "value": false },
        { "name": "year", "openingChar": "(", "closingChar": ")", "value": false },
        { "name": "context", "openingChar": "@", "closingChar": ")", "value": false },
        { "name": "tags", "openingChar": "#", "closingChar": "", "value": false },
    ]
    // text = text.trim()
    // console.log(`🚀 ~ file: findNextSeparatingCharacter.js ~ line 13 ~ findNextSeparatingCharacter ~ text`, text)
    separators.forEach(separator => {
        separator.value = text.indexOf(separator.openingChar)
        // console.log(`🚀 ~ file: findNextSeparatingCharacter.js ~ line 17 ~ findNextSeparatingCharacter ~ text.indexOf(separator.openingChar)`, separator)
    })
    return getMinNotFalse(separators);
}

export default findNextSeparatingCharacter
// removed 'author' dash character from the list of separators
// {"name": "author", "openingChar": "-", "closingChar": "", "value": false},