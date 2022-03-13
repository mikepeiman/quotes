import { c as client } from "../../../chunks/dgraphClient-b4a302b9.js";
import { gql } from "graphql-request";
let quotes;
const mutateQuotes = gql`
mutation addQuotes($data: [AddQuoteInput!]!) {
    addQuote(input: $data) {
      numUids
      quote {
        id
        quoteBody
      }
    }
  }`;
gql`
  mutation deleteAllQuotes {
    deleteQuote(filter: {quoteBody: {}}) {
      numUids
    }
  }
  `;
gql`query MyQuery {
    queryQuote {
      author {
        name
      }
      tags {
        tag
      }
      quoteBody
    }
  }
  `;
const get = async ({ query }) => {
  try {
    let value = query.get("data");
    let data = JSON.parse(value);
    const graphQuery = mutateQuotes;
    await client.request(graphQuery, data).then((res) => {
      console.log(`\u{1F680} ~ file: index.json.js ~ line 138 ~ awaitclient.request ~ res`, res);
      quotes = res.addQuote.quote;
      console.log(`\u{1F680} ~ file: index.json.js ~ line 144 ~ awaitclient.request ~ quotes`, quotes);
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
export { get, quotes };
