import { GraphQLClient } from "graphql-request";
const VITE_DGRAPH_ENDPOINT = "https://blue-surf-460106.us-east-1.aws.cloud.dgraph.io/graphql";
console.log(`\u{1F680} ~ file: dgraphClient.js ~ line 4 ~ VITE_DGRAPH_ENDPOINT`, VITE_DGRAPH_ENDPOINT);
const client = new GraphQLClient(VITE_DGRAPH_ENDPOINT);
export { client as c };
