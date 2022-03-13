import { c as client } from "../../../chunks/dgraphClient-b4a302b9.js";
import { gql } from "graphql-request";
console.log(`calling index.dgraph.json.js`);
const getAllTodos = gql`query MyQuery {
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
    const query = getAllTodos;
    await client.request(query).then((data) => {
      supabase_todos = data.queryQuote;
    });
    return {
      status: 200,
      body: { supabase_todos }
    };
  } catch (error) {
    return {
      body: { error: "There was a server error" }
    };
  }
};
export { get };
