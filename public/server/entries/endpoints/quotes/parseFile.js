import { parse } from "./parseQuotes.js";
import { s as storedQuotesArray } from "../../../chunks/quotes-5c506588.js";
import "./getAuthor.js";
import "./findNextSeparatingCharacter.js";
import "./getMinNotFalse.js";
import "../../../chunks/index-5b1f353a.js";
import "../../../chunks/index-e675dbce.js";
import "../../../chunks/dgraphClient-b4a302b9.js";
import "graphql-request";
const cheerio = require("cheerio");
const htmlparser2 = require("htmlparser2");
let quotes = [];
let quotesArrays = [];
let filePath = "C:/webdev/kitplate/static/Quotes.html";
const parseFile = (doc) => {
  const dom = htmlparser2.parseDocument(doc);
  cheerio.load(dom);
  quotesArrays = isolateQuotationBlocks(divs);
  for (let i = 0; i < 630; i++) {
    let item = stringifyArray(quotesArrays[i]);
    if (item.includes("\\r") || item.includes("\\n")) {
      item = item.replace(/(\\r\\n|\\n|\\r)/gm, "");
    }
    let workingQuoteObject = {};
    workingQuoteObject["originalText"] = item;
    workingQuoteObject["remainingText"] = item;
    workingQuoteObject["details"] = [];
    workingQuoteObject["tags"] = [];
    workingQuoteObject = parse(workingQuoteObject);
    quotes = [...quotes, workingQuoteObject];
  }
  storedQuotesArray.set(quotes);
  return quotes;
};
function isolateQuotationBlocks(divs2) {
  let quoteArray = [];
  for (let i = 0; i < divs2.length; i++) {
    let div = divs2[i];
    if (div.innerText.length > 5) {
      quoteArray = [...quoteArray, div.innerText];
    } else {
      quotesArrays = [...quotesArrays, quoteArray];
      quoteArray = [];
    }
  }
  return quotesArrays;
}
function stringifyArray(item) {
  let tempString = "";
  if (item.length > 1) {
    item.forEach((subItem) => {
      tempString += `${subItem}<br>`;
    });
    return tempString;
  } else {
    tempString = "";
    return item[0];
  }
}
parseFile(filePath);
export { parseFile };
