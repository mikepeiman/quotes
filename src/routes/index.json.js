import { dgraph } from '$lib/dgraphClient'
import { gql, request } from 'graphql-request'


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
`
export const get = async () => {
  try {
    const query = getAllQuotes
    await dgraph.request(query).then((data) => {
      quotes = data.queryQuote
    })
    return {
      status: 200,
      body: { quotes }
    }
  } catch (error) {
    return {
      body: { error: 'There was a server error' }
    }
  }
}