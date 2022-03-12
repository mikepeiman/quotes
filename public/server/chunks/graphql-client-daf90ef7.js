import { GraphQLClient } from "graphql-request";
const GRAPHQL_ENDPOINT = process.env["GRAPHQL_ENDPOINT"];
const client = new GraphQLClient(GRAPHQL_ENDPOINT);
export { client as c };
