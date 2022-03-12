const parse = (workingQuoteObject2) => {
  if (!workingQuoteObject2["quoteBody"]) {
    workingQuoteObject2 = getQuoteBody(workingQuoteObject2);
  }
  if (!workingQuoteObject2["author"]) {
    workingQuoteObject2 = getQuoteAuthor(workingQuoteObject2);
  }
  if (!workingQuoteObject2["parsingComplete"]) {
    workingQuoteObject2 = parseNextDetail(workingQuoteObject2);
    parse(workingQuoteObject2);
  }
  console.log(workingQuoteObject2);
  return workingQuoteObject2;
};
function getQuoteBody(workingQuoteObject2) {
  let { originalText, remainingText } = workingQuoteObject2;
  let workingText, splitText, finalText, remainder;
  workingText = workingQuoteObject2["quoteBody"] = originalText;
  splitText = workingText.split(`"`);
  finalText = splitText[1];
  remainder = splitText[2];
  let len = workingText.length;
  let nextPartStartIndex = remainder.indexOf(`-`);
  nextPartStartIndex = nextPartStartIndex > -1 ? nextPartStartIndex : 0;
  remainder = Array.from(remainder).splice(nextPartStartIndex, len).join(String()).trim();
  console.log(finalText);
  console.log(remainder);
  workingQuoteObject2["remainingText"] = remainder;
  workingQuoteObject2["quoteBody"] = finalText;
  return workingQuoteObject2;
}
function getQuoteAuthor(workingQuoteObject2) {
  let { author, remainingText } = workingQuoteObject2;
  let workingText = authorTrim(remainingText);
  workingQuoteObject2["author"] = workingText;
  let textEnd = workingText.length;
  let separatorValue = findDefiningCharacter(workingText);
  if (separatorValue > 0 && separatorValue) {
    author = Array.from(workingText).splice(0, separatorValue).join(String());
    author = authorTrim(author);
    workingText = Array.from(workingText).splice(separatorValue, textEnd).join(String()).trim();
    console.log(workingText);
    workingQuoteObject2["remainingText"] = workingText ? workingText : false;
  } else {
    author = authorTrim(workingText);
    workingQuoteObject2["author"] = author;
    workingQuoteObject2["remainingText"] = false;
    workingQuoteObject2["parsingComplete"] = true;
  }
  workingQuoteObject2["author"] = author;
  return workingQuoteObject2;
}
function authorTrim(author) {
  if (author.includes("-")) {
    return author.split("-")[1].trim();
  }
  return author.trim();
}
function parseNextDetail(workingQuoteObject2) {
  let { remainingText, nextPart } = workingQuoteObject2;
  if (!remainingText) {
    workingQuoteObject2["parsingComplete"] = true;
    return workingQuoteObject2;
  }
  let separatorValue = findDefiningCharacter(remainingText);
  nextPart = nameNextPartOfQuote(remainingText, separatorValue);
  workingQuoteObject2 = parseNextPartOfQuote(workingQuoteObject2, nextPart, separatorValue);
  return workingQuoteObject2;
}
function parseQuoteAuthorTitle(workingQuoteObject2, separatorValue) {
  let title, text, nextPart;
  text = workingQuoteObject2["remainingText"].trim();
  text.split(",");
  let textEnd = text.length;
  text = Array.from(text).splice(separatorValue + 1, textEnd).join(String());
  separatorValue = findDefiningCharacter(text);
  nextPart = nameNextPartOfQuote(text, separatorValue);
  workingQuoteObject2["nextPart"] = nextPart;
  if (nextPart) {
    title = Array.from(text).splice(0, separatorValue).join(String()).trim();
    title = titleTrim(title, ")");
    text = Array.from(text).splice(separatorValue, textEnd).join(String());
  } else {
    title = text;
    text = false;
  }
  workingQuoteObject2.authorTitle?.push(title.trim());
  workingQuoteObject2.details?.push({ "type": "Author title", "value": title });
  workingQuoteObject2["remainingText"] = text;
  return workingQuoteObject2;
}
function titleTrim(title, char) {
  let split;
  if (title.includes(char)) {
    split = title.split(char);
    split[0].length;
    split[1].length;
    title = split.reduce((min, item) => min > item.length ? item.length : min);
  }
  return title.trim();
}
function parseQuoteAxiom(workingQuoteObject2, separatorValue) {
  let title, text, nextPart;
  text = workingQuoteObject2["remainingText"].trim();
  let textEnd = text.length;
  text = Array.from(text).splice(separatorValue + 1, textEnd).join(String());
  separatorValue = findDefiningCharacter(text);
  nextPart = nameNextPartOfQuote(text, separatorValue);
  workingQuoteObject2["nextPart"] = nextPart;
  if (nextPart) {
    title = Array.from(text).splice(1, separatorValue - 1).join(String()).trim();
    text = Array.from(text).splice(separatorValue, textEnd).join(String());
  } else {
    title = text;
    text = false;
  }
  workingQuoteObject2["authorTitle"] = title.trim();
  workingQuoteObject2.details.push({ "type": "Author title", "value": title });
  workingQuoteObject2["remainingText"] = text;
  return workingQuoteObject2;
}
function parseQuoteDate(workingQuoteObject2, separatorValue) {
  let { remainingText } = workingQuoteObject2;
  remainingText.trim();
  let textEnd = remainingText.length;
  let date = Array.from(remainingText).splice(separatorValue + 1, textEnd - separatorValue - 2).join(String());
  workingQuoteObject2["date"] = date;
  console.log(`\u{1F680} ~ file: parse.js ~ line 193 ~ parseQuoteDate ~ date`, date);
  remainingText = Array.from(remainingText).splice(separatorValue, textEnd).join(String());
  console.log(`\u{1F680} ~ file: parse.js ~ line 195 ~ parseQuoteDate ~ remainingText`, remainingText);
  workingQuoteObject2["parsingComplete"] = true;
  return workingQuoteObject2;
}
function parseQuoteSource(workingQuoteObject2, separatorValue) {
  let { remainingText } = workingQuoteObject2;
  let text = workingQuoteObject2["remainingText"].trim();
  console.log(text);
  text.length;
  let startingSeparatorValue = findDefiningCharacter(text);
  let closingSeparatorValue = text.indexOf("]", startingSeparatorValue + 1);
  let start = separatorValue + 1;
  let end = getClosingCharacterValue(text, "]") - 1;
  let source = Array.from(text).splice(startingSeparatorValue, closingSeparatorValue).join(String()).trim();
  start = source.length + 1;
  end = text.length - 1;
  remainingText = Array.from(text).splice(start, end).join(String()).trim();
  console.log(remainingText);
  workingQuoteObject2["remainingText"] = remainingText;
  workingQuoteObject2.sources?.push(source);
  workingQuoteObject2?.details?.push({ type: "source", value: source });
  return workingQuoteObject2;
}
function parseQuoteContext(workingQuoteObject2, separatorValue) {
  let { remainingText } = workingQuoteObject2;
  let text = remainingText.trim();
  findDefiningCharacter(text);
  let newPart = text.split("(")[1];
  let context = newPart.split(")")[0];
  let remainder = newPart.split(")")[1] ? newPart.split(")")[1].trim() : false;
  workingQuoteObject2["remainingText"] = remainder;
  workingQuoteObject2["context"] = context;
  workingQuoteObject2?.details?.push({ type: "context", value: context });
  console.log(`\u{1F680} ~ file: parse.js ~ line 287 ~ parseQuoteContext ~ workingQuoteObject`, workingQuoteObject2);
  return workingQuoteObject2;
}
function parseQuoteTags(workingQuoteObject2, separatorValue) {
  let { remainingText } = workingQuoteObject2;
  let text = remainingText.trim();
  separatorValue = findDefiningCharacter(text);
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
  workingQuoteObject2["remainingText"] = remainingText;
  workingQuoteObject2["tags"]?.push(thisPart);
  workingQuoteObject2?.details?.push({ type: "tags", value: thisPart });
  return workingQuoteObject2;
}
function findDefiningCharacter(text) {
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
}
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
function nextInstanceOfChar(text, charIndex) {
  return text.charAt(charIndex + 1);
}
function nameNextPartOfQuote(remainingText, separatorValue) {
  let char = remainingText.charAt(separatorValue);
  if (char == "(") {
    let nextChar = nextInstanceOfChar(remainingText, separatorValue);
    if (isLetter(nextChar)) {
      return "authorTitle";
    }
  }
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
function parseNextPartOfQuote(workingQuoteObject2, nextPart, separatorValue) {
  switch (nextPart) {
    case "authorTitle":
      return parseQuoteAuthorTitle(workingQuoteObject2, separatorValue);
    case "axiom":
      return parseQuoteAxiom(workingQuoteObject2, separatorValue);
    case "date":
      return parseQuoteDate(workingQuoteObject2, separatorValue);
    case "source":
      return parseQuoteSource(workingQuoteObject2, separatorValue);
    case "context":
      return parseQuoteContext(workingQuoteObject2);
    case "tags":
      return parseQuoteTags(workingQuoteObject2, separatorValue);
    default:
      workingQuoteObject2["parsingComplete"] = true;
      break;
  }
  return workingQuoteObject2;
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
let test11 = `"The ironies of history occur most pungently to those who don't believe in them." - Christopher Hitchens
[<a
  href=&quot;https://www.youtube.com/watch?v=g6aKFKIDbQw&amp;t=334s&quot;></a>][Christopher
Hitchens on the History of the 20th Century: U.K. and America (1995)]`;
let workingQuoteObject = {};
workingQuoteObject["originalText"] = workingQuoteObject["remainingText"] = test11;
workingQuoteObject["details"] = workingQuoteObject["authorTitle"] = workingQuoteObject["tags"] = [];
let result = parse(workingQuoteObject);
console.log(result);
export { parse };
