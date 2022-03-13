import { client } from '$lib/dgraphClient'
import { gql, request } from 'graphql-request'

console.log(`calling index.dgraph.json.js`)
const getAllTodos = gql`query MyQuery {
    queryTodo {
      body
      completed
      created
      id
    }
  }
`
export const get = async () => {
  try {
    const query = getAllTodos
    await client.request(query).then((data) => {
      console.log(`🚀 ~ file: index.dgraph.json.js ~ line 18 ~ awaitclient.request ~ data`, data)
      dgraph_todos = data.queryTodo
      console.log(`🚀 ~ file: index.dgraph.json.js ~ line 19 ~ awaitclient.request ~ dgraph_todos`, dgraph_todos)
    })
    return {
      status: 200,
      body: { dgraph_todos }
    }
  } catch (error) {
    return {
      body: { error: 'There was a server error' }
    }
  }
}