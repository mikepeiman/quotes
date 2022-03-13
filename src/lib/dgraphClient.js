
import {GraphQLClient} from 'graphql-request'
const VITE_DGRAPH_ENDPOINT = import.meta.env.VITE_DGRAPH_ENDPOINT
console.log(`🚀 ~ file: dgraphClient.js ~ line 4 ~ VITE_DGRAPH_ENDPOINT`, VITE_DGRAPH_ENDPOINT)
export const dgraph = new GraphQLClient(VITE_DGRAPH_ENDPOINT)   