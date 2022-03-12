import { c as client } from "../../../chunks/dgraph-client-b4a302b9.js";
import { gql } from "graphql-request";
console.log(`\u{1F680} ~ file: index.dgraph.getQuote.json.js ~ line 2 ~ client `, client);
console.log(`calling index.dgraph.getQuote.json.js`);
gql`query MyQuery {
  queryQuote {
    id
    quoteBody
    author {
      name
    }
    tags {
      name
    }
  }
  }
`;
const get = async ({ url }) => {
  console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 23 ~ get ~ url`, url);
  let queryType = JSON.parse(url.searchParams.get("queryType"));
  let data = JSON.parse(url.searchParams.get("data"));
  let payload;
  console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 25 ~ get ~ queryType & data: `, queryType, data);
  let query, id, quote;
  if (queryType === "getQuoteById") {
    id = data;
    query = gql`query MyQuery {
      queryQuote(filter: {id: "${id}"}) {
        quoteBody
    }}`;
  }
  if (queryType === "getQuoteByAuthor") {
    author = data;
    query = gql`query MyQuery {
      queryQuote(filter: {author: {name: ${authorName}}}) {
        quoteBody
      }}`;
  }
  if (queryType === "getAllQuotes") {
    console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 42 ~ queryQuote ~ queryType === "getAllQuotes"`, queryType === "getAllQuotes");
    query = gql`query MyQuery {
    queryQuote {
      id
      quoteBody
      author {
        name
      }
      date
      context
      tags {
        name
      }
      source {
        name
      }
    }
  }
`;
  }
  if (queryType === "upsertQuote" || queryType === "addQuote") {
    quote = data;
    payload = `
    {
      "quote":
      {
        "originalText": "${quote.quoteBody} - ${quote.author.name}, ${quote.author.title} [${quote.source}] @(${quote.tags})",
        "quoteBody": "${quote.quoteBody}",
        "author": {
          "name": "${quote.author.name.trim()}",
          "title": "${quote.author.title}"
        },
        "date": "${quote.date}",
        "context": "${quote.context}",
        "tags": [${quote.tags}],
        "source": {
          "name": "${quote.source}"
        }
      }
  }
  `;
    payload2 = `
  {
    "quote":
    {
      "originalText": "${quote.quoteBody} - ${quote.author.name}, ${quote.author.title} [${quote.source}] @(${quote.tags})",
      "quoteBody": "${quote.quoteBody}",
      "author": {
        "name": "${quote.author.name.trim()}",
        "title": "${quote.author.title}"
      },
      "date": "${quote.date}",
      "context": "${quote.context}",
      "tags": [${quote.tags}],
      "source": {
        "name": "${quote.source}"
      }
    }
}
`;
    console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 62 ~ get ~ payload`, payload);
    payload = JSON.parse(payload);
    console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 64 ~ get ~ payload`, payload);
    console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 60 ~ get ~ quote`, quote);
    if (queryType === "upsertQuote") {
      query = gql`mutation UpsertQuote($quote: [AddQuoteInput!]!) {
      addQuote(input: $quote, upsert: true) {
        quote {
          id
          quoteBody
          originalText
          author {
            name
            title
          }
          tags {
            name
          }
          source {
            name
          }
        }
      } 
    },
    `;
    } else if (queryType === "addQuote") {
      query = gql`mutation newQuote(body: "${quote.quoteBody}")`;
    }
  }
  let varQuote = `{
    "quote": 
      {
        "quoteBody": "What a second, is this working on Friday morning?",
        "originalText": "Getting uploads! It's Friday, March 04, 2022",
        "author": {
          "name": "Michael Peiman",
          "title": "Single father seeker of truth and wisdom"
        },
        "tags": {
          "name": "third tag",
          "name": "morning"
        },
        "source": "my introspective mind"
  }
}
  `;
  varQuote = JSON.parse(varQuote);
  try {
    await client.request(query).then((res) => {
      console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 103 ~ awaitclient.request ~ payload`, payload);
      console.log(`\u{1F680} ~ file: index.json.js ~ line 138 ~ awaitclient.request ~ res`, res);
      console.log(`\u{1F680} ~ file: index.json.js ~ line 138 ~ awaitclient.request ~ res`, res.length);
      data = res.queryQuote;
      queryType === "upsertQuote" || queryType === "addQuote" ? data = res.addQuote.quote : data = res.queryQuote;
      console.log(`\u{1F680} ~ file: index.dgraph.getQuote.js ~ line 141 ~ awaitclient.request ~ data`, data);
    });
    return {
      status: 200,
      body: { data }
    };
  } catch (error) {
    console.log(`\u{1F680} ~ file: index.json.js ~ line 123 ~ get ~ error`, error);
    return {
      body: { error: "There was a server error" }
    };
  }
};
export { get };
