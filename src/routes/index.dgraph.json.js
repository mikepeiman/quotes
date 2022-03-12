import { client } from '$lib/dgraph-client'
console.log(`🚀 ~ file: index.dgraph.json.js ~ line 2 ~ client`, client)
import { gql, request } from 'graphql-request'

console.log(`calling index.dgraph.json.js`)
const getAllQuotes = gql`query MyQuery {
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
`
export const get = async () => {
  console.log(`🚀 ~ file: index.dgraph.json.js ~ line 7 ~ getAllQuotes`, getAllQuotes)
  try {
    const query = getAllQuotes
    await client.request(query).then((data) => {
      console.log(`🚀 ~ file: index.dgraph.json.js ~ line 18 ~ awaitclient.request ~ data`, data)
      dgraph_quotes = data.queryQuote
      console.log(`🚀 ~ file: index.dgraph.json.js ~ line 19 ~ awaitclient.request ~ dgraph_quotes`, dgraph_quotes)
    })
    return {
      status: 200,
      body: { dgraph_quotes }
    }
  } catch (error) {
    return {
      body: { error: 'There was a server error' }
    }
  }
}