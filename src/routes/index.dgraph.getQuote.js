import { client } from '$lib/dgraph-client'
console.log(`🚀 ~ file: index.dgraph.getQuote.json.js ~ line 2 ~ client `, client)
import { gql, request } from 'graphql-request'

console.log(`calling index.dgraph.getQuote.json.js`)
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



export const get = async ({ url }) => {
  console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 23 ~ get ~ url`, url)
  let queryType = JSON.parse(url.searchParams.get("queryType"))
  console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 25 ~ get ~ queryType`, queryType)
  let data = JSON.parse(url.searchParams.get("data"))
  let payload
  console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 25 ~ get ~ queryType & data: `, queryType, data)
  let query, id, quote


  if (queryType === "getQuoteById") {
    id = data
    query = gql`query MyQuery {
      queryQuote(filter: {id: "${id}"}) {
        quoteBody
    }}`
  }
  if (queryType === "getQuoteByAuthor") {
    author = data
    query = gql`query MyQuery {
      queryQuote(filter: {author: {name: ${authorName}}}) {
        quoteBody
      }}`
  }
  if (queryType === "getAllQuotes") {
    console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 42 ~ queryQuote ~ queryType === "getAllQuotes"`, queryType === "getAllQuotes")
    query = gql`query MyQuery {
    queryQuote {
      id
      quoteBody
      author {
        name
      }
      date
      context
      tags {
        name
      }
      source {
        name
      }
    }
  }
`
  }
  if (queryType === "upsertQuote" || queryType === "addQuote") {
    quote = data
    // quote.date === "" || quote.date === "undefined" || quote.date === undefined ? quote.date = "" : quote.date
    // new Date().toISOString()
    payload = `
    {
      "quote":
      {
        "originalText": "${quote.quoteBody} - ${quote.author.name}, ${quote.author.title} [${quote.source}] @(${quote.tags})",
        "quoteBody": "${quote.quoteBody}",
        "author": {
          "name": "${quote.author.name.trim()}",
          "title": "${quote.author.title}"
        },
        "date": "${quote.date}",
        "context": "${quote.context}",
        "tags": [${quote.tags}],
        "source": {
          "name": "${quote.source}"
        }
      }
  }
  `


  console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 62 ~ get ~ payload`, payload)
    payload = JSON.parse(payload)
    console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 64 ~ get ~ payload`, payload)
    console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 60 ~ get ~ quote`, quote)
  if(queryType === "upsertQuote"){

    query = gql`mutation UpsertQuote($quote: [AddQuoteInput!]!) {
      addQuote(input: $quote, upsert: true) {
        quote {
          id
          quoteBody
          originalText
          author {
            name
            title
          }
          tags {
            name
          }
          source {
            name
          }
        }
      } 
    },
    `
    } 
     if (queryType === "addQuote" || queryType === "addManyQuotes") {
      query = gql`mutation AddQuote($quote: [AddQuoteInput!]!) {
        addQuote(input: $quote) {
          quote {
            id
            quoteBody
            originalText
            author {
              name
              title
            }
            tags {
              name
            }
            source {
              name
            }
          }
        }
      },
      `
      // query = gql`mutation newQuote(body: "${quote.quoteBody}")`
    }       
  }
  if (queryType === "addManyQuotes") {
    data
    console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 161 ~ get ~ addManyQuotes data`, data)
    payload = `
    {
      "quote":
      {
        "originalText": "${quote.quoteBody} - ${quote.author.name}, ${quote.author.title} [${quote.source}] @(${quote.tags})",
        "quoteBody": "${quote.quoteBody}",
        "author": {
          "name": "${quote.author.name.trim()}",
          "title": "${quote.author.title}"
        },
        "date": "${quote.date}",
        "context": "${quote.context}",
        "tags": [${quote.tags}],
        "source": {
          "name": "${quote.source}"
        }
      }
  }
  `
  }

  try {
    await client.request(getAllQuotes).then((res) => {
      console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 103 ~ awaitclient.request ~ payload\n\n`, payload)
      console.log(`🚀 ~ file: index.json.js ~ line 138 ~ awaitclient.request ~ res\n\n`, res)
      console.log(`🚀 ~ file: index.json.js ~ line 138 ~ awaitclient.request ~ res\n\n`, res.length)
      data = res.queryQuote
      queryType === "upsertQuote" || queryType === "addQuote" ? data = res.addQuote.quote : data = res.queryQuote
      console.log(`🚀 ~ file: index.dgraph.getQuote.js ~ line 141 ~ awaitclient.request ~ data\n\n`, data)
    })
    return {
      status: 200,
      body: { data }
    }
  } catch (error) {
    console.log(`🚀 ~ file: index.dgraph.json.js ~ line 123 ~ get ~ error`, error)
    return {
      body: { error: 'There was a server error' }
    }
  }
}

// example script for server, here for reference, modified to Quotes from https://dgraph.io/docs/graphql/lambda/mutation/
// async function newQuote({args, graphql}) {
//   const results = await graphql(`mutation ($body: String!) {
//       addQuote(input: [{quoteBody: $body, name: "Mike Peiman" }]) {
//           quote {
//               id
//               name
//               quoteBody
//           }
//       }
//   }`, {"body": args.name})
//   return results.data.addQuote.quote[0].id
// }

// self.addGraphQLResolvers({
//   "Mutation.newQuote": newQuote
// })