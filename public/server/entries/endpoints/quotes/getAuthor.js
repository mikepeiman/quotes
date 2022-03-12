import findNextSeparatingCharacter from "./findNextSeparatingCharacter.js";
import "./getMinNotFalse.js";
const getAuthor = (workingQuoteObject) => {
  let { author, remainingText } = workingQuoteObject;
  workingQuoteObject["author"]["name"] = author = remainingText;
  let textEnd = remainingText.length;
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 60 ~ getQuoteAuthor ~ author`, author);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 62 ~ getQuoteAuthor ~ remainingText`, remainingText);
  if (remainingText && remainingText.includes("-")) {
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 12 ~ getAuthor ~ remainingText && remainingText.includes("-")`, remainingText && remainingText.includes("-"));
    author = remainingText = remainingText.split(/-(.+)/)[1];
    author = author.trim();
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 14 ~ getAuthor ~ author`, author);
  }
  if (!author && !remainingText) {
    author = remainingText = workingQuoteObject.details[0]?.value;
  }
  let separator = findNextSeparatingCharacter(remainingText);
  console.log(`\u{1F680} ~ file: getAuthor.js ~ line 19 ~ getAuthor ~ separator`, separator);
  if (separator.value > -1 && author) {
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 15 ~ getAuthor ~ remainingText`, remainingText);
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 17 ~ getAuthor ~ author`, author);
    remainingText = remainingText.trim();
    let i1 = remainingText[0];
    let i2 = remainingText[separator.value];
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 19 ~ getAuthor ~ i1, i2, separator`, i1, i2, separator);
    author = Array.from(author).splice(0, separator.value).join(String()).trim();
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 16 ~ getAuthor ~ author`, author);
    remainingText = Array.from(remainingText).splice(separator.value - 2, textEnd).join(String()).trim();
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 31 ~ getAuthor ~ remainingText`, remainingText);
    workingQuoteObject["remainingText"] = remainingText;
    workingQuoteObject["author"]["name"] = author;
  } else {
    console.log("parse.js line:45 separator", separator);
    workingQuoteObject["author"]["name"] = author;
    workingQuoteObject["remainingText"] = false;
    workingQuoteObject["parsingComplete"] = true;
  }
  let checkAuthor = findNextSeparatingCharacter(author);
  if (checkAuthor) {
    workingQuoteObject["author"]["name"] = author = author.split(checkAuthor.openingChar)[0].trim();
    console.log(`\u{1F680} ~ file: getAuthor.js ~ line 46 ~ getAuthor ~ author`, author);
  }
  console.log(`\u{1F680} ~ file: getAuthor.js ~ line 44 ~ getAuthor ~ findNextSeparatingCharacter(author)`, findNextSeparatingCharacter(author));
  return workingQuoteObject;
};
export { getAuthor as default };
