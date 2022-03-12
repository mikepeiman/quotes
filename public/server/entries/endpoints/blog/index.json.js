import { c as client } from "../../../chunks/graphql-client-daf90ef7.js";
import { gql } from "graphql-request";
const get = async () => {
  try {
    const query = gql`query Posts {
            posts {
              title
              slug
              date
              excerpt
              tags
              coverImage {
                url
              }
              article {
                html
              }
            }
          }`;
    const { posts } = await client.request(query);
    console.log(`\u{1F680} ~ file: index.json.js ~ line 18 ~ get ~ posts`, posts);
    return {
      status: 200,
      body: { posts }
    };
  } catch (error) {
    return {
      body: { error: "There was a server error" }
    };
  }
};
export { get };
