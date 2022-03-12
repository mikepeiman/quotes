import { c as client } from "../../../chunks/graphql-client-daf90ef7.js";
import { gql } from "graphql-request";
const get = async (req) => {
  const slug = req.params.slug;
  try {
    const query = gql`query Post($slug: String!) {
            post(where: {slug:$slug}) {
              title
              date
              tags
              article {
                html
              }
              coverImage{
                url
              }
            }
          }`;
    const variables = { slug };
    const { post } = await client.request(query, variables);
    console.log(`\u{1F680} ~ file: [slug].json.js ~ line 21 ~ get ~ post`, post);
    return {
      status: 200,
      body: { post }
    };
  } catch (error) {
    return {
      body: { error: "There was a server error" }
    };
  }
};
export { get };
