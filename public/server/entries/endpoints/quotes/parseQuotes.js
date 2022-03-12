import getAuthor from "./getAuthor.js";
import "./findNextSeparatingCharacter.js";
import "./getMinNotFalse.js";
const parse = (workingQuoteObject) => {
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 4 ~ parse ~ workingQuoteObject`, workingQuoteObject);
  if (!workingQuoteObject["quoteBody"]) {
    console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 8 ~ parse ~ need quoteBody`);
    workingQuoteObject = getQuoteBody(workingQuoteObject);
  }
  if (!workingQuoteObject["author"]["name"]) {
    console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 8 ~ parse ~ need author`);
    workingQuoteObject = getAuthor(workingQuoteObject);
  }
  if (!workingQuoteObject["parsingComplete"]) {
    workingQuoteObject = parseNextDetail(workingQuoteObject);
    parse(workingQuoteObject);
  }
  return workingQuoteObject;
};
function getQuoteBody(workingQuoteObject) {
  let { originalText, remainingText } = workingQuoteObject;
  let text, splitText, quote, remainder;
  text = workingQuoteObject["quoteBody"] = originalText;
  splitText = text.split(`"`);
  quote = splitText[1];
  remainder = splitText[2];
  let len = text.length;
  let authorStart = remainder.indexOf("-");
  authorStart = authorStart > -1 ? authorStart : 0;
  remainder = Array.from(remainder).splice(authorStart, len).join(String()).trim();
  workingQuoteObject["remainingText"] = remainder;
  workingQuoteObject["quoteBody"] = quote;
  return workingQuoteObject;
}
function parseNextDetail(workingQuoteObject) {
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 106 ~ parseNextDetail ~ workingQuoteObject`, workingQuoteObject);
  let { remainingText, nextPart } = workingQuoteObject;
  if (!remainingText) {
    workingQuoteObject["parsingComplete"] = true;
    console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 110 ~ parseNextDetail ~ workingQuoteObject['parsingComplete'] = true`, true);
    return workingQuoteObject;
  }
  let separatorValue = findNextSeparatingCharacter(remainingText);
  nextPart = nameNextPartOfQuote(remainingText, separatorValue);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 97 ~ parseNextDetail ~ remainingText`, remainingText);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 97 ~ parseNextDetail ~ separatorValue`, separatorValue);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 99 ~ parseNextDetail ~ nextPart`, nextPart);
  workingQuoteObject = parseNextPartOfQuote(workingQuoteObject, nextPart, separatorValue);
  return workingQuoteObject;
}
function parseQuoteAuthorTitle(workingQuoteObject, separatorValue) {
  let title, text, nextPart;
  text = workingQuoteObject["remainingText"].trim();
  let splitText = text.split(/,(.+)/);
  if (splitText.length > 1) {
    title = splitText[1].trim();
    workingQuoteObject["author"]["title"] = title;
  }
  let textEnd = text.length;
  text = Array.from(text).splice(separatorValue + 1, textEnd).join(String());
  separatorValue = findNextSeparatingCharacter(text);
  nextPart = nameNextPartOfQuote(text, separatorValue);
  workingQuoteObject["nextPart"] = nextPart;
  nextPart === "axiom" && splitText !== "axiom" ? workingQuoteObject["parsingComplete"] = true : workingQuoteObject["parsingComplete"] = false;
  if (nextPart && !workingQuoteObject["parsingComplete"]) {
    title = Array.from(text).splice(1, separatorValue - 1).join(String()).trim();
    workingQuoteObject["remainingText"] = text = Array.from(text).splice(separatorValue, textEnd).join(String());
  } else {
    title = text;
    text = false;
  }
  workingQuoteObject["author"]["title"] = [...workingQuoteObject.authorTitle, title];
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 109 ~ parseQuoteAuthorTitle ~ workingQuoteObject['author']['title'].length`, workingQuoteObject["author"]["title"].length);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 109 ~ parseQuoteAuthorTitle ~ workingQuoteObject['author']['title']`, workingQuoteObject["author"]["title"]);
  workingQuoteObject["author"]["title"] = title;
  if (Array.isArray(workingQuoteObject["author"]["title"])) {
    let str = workingQuoteObject["author"]["title"].join(",").trim();
    console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 113 ~ parseQuoteAuthorTitle ~ str`, str);
    workingQuoteObject["author"]["title"] = str;
  }
  workingQuoteObject["remainingText"] = text;
  return workingQuoteObject;
}
function parseQuoteAxiom(workingQuoteObject, separatorValue) {
  let title, text, nextPart;
  text = workingQuoteObject["remainingText"].trim();
  let textEnd = text.length;
  text = Array.from(text).splice(separatorValue + 1, textEnd).join(String());
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 165 ~ parseQuoteAxiom ~ text`, text);
  separatorValue = findNextSeparatingCharacter(text);
  nextPart = nameNextPartOfQuote(text, separatorValue);
  workingQuoteObject["nextPart"] = nextPart;
  if (nextPart) {
    title = Array.from(text).splice(1, separatorValue - 1).join(String()).trim();
    text = Array.from(text).splice(separatorValue, textEnd).join(String());
  } else {
    title = text;
    text = false;
  }
  workingQuoteObject["author"]["title"] = title.trim();
  workingQuoteObject.details.push({ "type": "Author title", "value": title });
  workingQuoteObject["remainingText"] = text;
  return workingQuoteObject;
}
function parseQuoteDate(workingQuoteObject, separatorValue) {
  let { remainingText } = workingQuoteObject;
  remainingText.trim();
  let textEnd = remainingText.length;
  let date = Array.from(remainingText).splice(separatorValue + 1, textEnd - separatorValue - 2).join(String());
  let test = hasNumber(date);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 146 ~ parseQuoteDate ~ test`, test);
  test ? workingQuoteObject["date"] = date : workingQuoteObject["context"] = date;
  textEnd - date.length;
  console.log(`\u{1F680} ~ file: parse.js ~ line 193 ~ parseQuoteDate ~ date`, date);
  remainingText = Array.from(remainingText).splice(separatorValue, textEnd).join(String());
  console.log(`\u{1F680} ~ file: parse.js ~ line 195 ~ parseQuoteDate ~ remainingText`, remainingText);
  workingQuoteObject["parsingComplete"] = true;
  return workingQuoteObject;
}
function hasNumber(myString) {
  return /\d/.test(myString);
}
function parseQuoteSource(workingQuoteObject, separatorValue) {
  let { remainingText } = workingQuoteObject;
  let text = workingQuoteObject["remainingText"].trim();
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 197 ~ parseQuoteSource ~ text`, text);
  text.length;
  separatorValue = findNextSeparatingCharacter(text);
  let start = separatorValue + 1;
  let end = getClosingCharacterValue(text, "]") - start;
  let source = Array.from(text).splice(start, end).join(String()).trim();
  start = source.length + 2;
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 204 ~ parseQuoteSource ~ start`, start);
  end = text.length - 1;
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 206 ~ parseQuoteSource ~ end`, end);
  remainingText = Array.from(text).splice(start, end).join(String()).trim();
  console.log(`\u{1F680} ~ file: parse.js ~ line 284 ~ parseQuoteSource ~ remainingText`, remainingText);
  workingQuoteObject["remainingText"] = remainingText;
  workingQuoteObject["source"] = source;
  workingQuoteObject?.details?.push({ type: "source", value: source });
  console.log(`\u{1F680} ~ file: parse.js ~ line 287 ~ parseQuoteSource ~ workingQuoteObject`, workingQuoteObject);
  return workingQuoteObject;
}
function parseQuoteContext(workingQuoteObject, separatorValue) {
  let { remainingText } = workingQuoteObject;
  let text = remainingText.trim();
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 222 ~ parseQuoteContext ~ text`, text);
  findNextSeparatingCharacter(text);
  getClosingCharacterValue(text, ")");
  let newPart = text.split("(")[1] ? text.split("(")[1] : text;
  let context = newPart.split(")")[0] ? newPart.split(")")[0] : newPart;
  let remainder = newPart.split(")")[1] ? newPart.split(")")[1].trim() : false;
  if (!remainder) {
    workingQuoteObject["parsingComplete"] = true;
  }
  workingQuoteObject["remainingText"] = remainder;
  workingQuoteObject["context"] = context;
  workingQuoteObject?.details?.push({ type: "context", value: context });
  console.log(`\u{1F680} ~ file: parse.js ~ line 287 ~ parseQuoteContext ~ workingQuoteObject`, workingQuoteObject);
  return workingQuoteObject;
}
function parseQuoteTags(workingQuoteObject, separatorValue) {
  let { remainingText } = workingQuoteObject;
  let text = remainingText.trim();
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 246 ~ parseQuoteTags ~ text`, text);
  separatorValue = findNextSeparatingCharacter(text);
  console.log(`\u{1F680} ~ file: parse.js ~ line 255 ~ parseQuoteTags ~ separatorValue`, separatorValue);
  let start = separatorValue + 1;
  let end = getNextCharacterValue(text, `#`, start) - 1;
  let thisPart;
  if (end > -1) {
    thisPart = Array.from(text).splice(start, end).join(String()).trim();
  } else {
    thisPart = Array.from(text).splice(start, text.length).join(String()).trim();
  }
  start = thisPart.length + 1;
  end = text.length - 1;
  remainingText = Array.from(text).splice(start, end).join(String()).trim();
  workingQuoteObject["remainingText"] = remainingText;
  workingQuoteObject["tags"]?.push(thisPart);
  workingQuoteObject?.details?.push({ type: "tags", value: thisPart });
  return workingQuoteObject;
}
function findNextSeparatingCharacter(remainingText) {
  let separators = [
    { "name": "author", "openingChar": "-", "closingChar": "", "value": false },
    { "name": "title", "openingChar": ",", "closingChar": ",", "value": false },
    { "name": "source", "openingChar": "[", "closingChar": "]", "value": false },
    { "name": "axiom", "openingChar": ":", "closingChar": "", "value": false },
    { "name": "year", "openingChar": "(", "closingChar": ")", "value": false },
    { "name": "context", "openingChar": "@", "closingChar": ")", "value": false },
    { "name": "tags", "openingChar": "#", "closingChar": "", "value": false }
  ];
  separators.forEach((separator) => {
    separator.value = remainingText.indexOf(separator.openingChar);
  });
  console.log(separators);
  return getMinNotFalse(separators);
}
function nameNextPartOfQuote(remainingText, separatorValue) {
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 286 ~ nameNextPartOfQuote ~ separatorValue`, separatorValue);
  console.log(`\u{1F680} ~ file: parseQuotes.js ~ line 286 ~ nameNextPartOfQuote ~ remainingText`, remainingText);
  let char = remainingText.charAt(separatorValue);
  switch (char) {
    case ",":
      return "authorTitle";
    case ":":
      return "axiom";
    case "(":
      return "date";
    case "[":
      return "source";
    case "@":
      return "context";
    case "#":
      return "tags";
    default:
      return false;
  }
}
function parseNextPartOfQuote(workingQuoteObject, nextPart, separatorValue) {
  switch (nextPart) {
    case "authorName":
      return getAuthor(workingQuoteObject);
    case "authorTitle":
      return parseQuoteAuthorTitle(workingQuoteObject, separatorValue);
    case "axiom":
      return parseQuoteAxiom(workingQuoteObject, separatorValue);
    case "date":
      return parseQuoteDate(workingQuoteObject, separatorValue);
    case "source":
      return parseQuoteSource(workingQuoteObject, separatorValue);
    case "context":
      return parseQuoteContext(workingQuoteObject);
    case "tags":
      return parseQuoteTags(workingQuoteObject, separatorValue);
    default:
      workingQuoteObject["parsingComplete"] = true;
      break;
  }
  return workingQuoteObject;
}
function getClosingCharacterValue(text, char) {
  let separator = text.indexOf(char);
  return separator;
}
function getNextCharacterValue(text, char, first) {
  let separatorIndex = text.indexOf(char, first + 1);
  return separatorIndex;
}
function getMinNotFalse(separators) {
  const charsFound = separators.filter((sep) => sep.value > -1);
  if (!charsFound.length) {
    return false;
  }
  const minSeparator = charsFound.reduce((min, item) => {
    return min > item.value ? item.value : min;
  }, charsFound[0].value);
  return minSeparator;
}
export { parse };
