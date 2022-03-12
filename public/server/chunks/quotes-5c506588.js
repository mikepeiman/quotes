import { w as writable } from "./index-5b1f353a.js";
import "./dgraph-client-b4a302b9.js";
import { gql } from "graphql-request";
const quotesFile = writable({});
const fileContent = writable({});
const quotesArray = writable([]);
const addedQuotes = writable([]);
gql`query MyQuery {
    queryQuote {
      id
      quoteBody
      author {
        name
      }
    }
    }
  `;
({
  subscribe: quotesFile.subscribe,
  set: (val) => {
    quotesFile.set(val);
    localStorage.setItem("quotesFile", JSON.stringify(val));
  }
});
({
  subscribe: fileContent.subscribe,
  set: (val) => {
    fileContent.set(val);
    localStorage.setItem("fileContent", JSON.stringify(val));
  }
});
const storedQuotesArray = {
  subscribe: quotesArray.subscribe,
  set: (val) => {
    quotesArray.set(val);
    localStorage.setItem("quotesArray", JSON.stringify(val));
  }
};
export { addedQuotes as a, quotesArray as q, storedQuotesArray as s };
