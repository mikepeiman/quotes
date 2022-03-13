import { c as client } from "../../../chunks/dgraphClient-b4a302b9.js";
import { gql } from "graphql-request";
const getAllQuotes = gql`query MyQuery {
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
const get = async () => {
  try {
    const query = getAllQuotes;
    await client.request(query).then((data) => {
      quotes = data.queryQuote;
    });
    return {
      status: 200,
      body: { quotes }
    };
  } catch (error) {
    return {
      body: { error: "There was a server error" }
    };
  }
};
export { get };
