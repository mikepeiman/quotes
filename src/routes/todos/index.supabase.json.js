import { client } from '$lib/dgraphClient'
import { gql, request } from 'graphql-request'

console.log(`calling index.dgraph.json.js`)
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
`
export const get = async () => {
  try {
    const query = getAllTodos
    await client.request(query).then((data) => {
      supabase_todos = data.queryQuote
    })
    return {
      status: 200,
      body: { supabase_todos }
    }
  } catch (error) {
    return {
      body: { error: 'There was a server error' }
    }
  }
}