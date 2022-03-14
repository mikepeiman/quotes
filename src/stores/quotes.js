import { writable, get } from "svelte/store";
import { dgraph } from "$lib/dgraphClient"
import { supabase } from "$lib/supabaseClient";
import { gql, request } from 'graphql-request'
import { v4 as uuidv4 } from 'uuid';
const quotesFile = writable({})
const fileContent = writable({})
export const quotesArray = writable([])
export const currentQuote = writable({})
export const addedQuotes = writable([])



export const addQuote = (quote) => {
    console.log(`🚀 ~ file: quotes.js ~ line 9 ~ addQuote ~ quote`, quote)
    if(!quote.id){
        quote.id = uuidv4()
    }
    addedQuotes.update((cur) => [...cur, quote])
    console.log(`🚀 ~ file: quotes.js ~ line 11 ~ addQuote ~ addedQuotes`, addedQuotes)
}

export const uploadQuote = async (quote) => {
    let dgraph_quotes
    console.log(`🚀 ~ file: quotes.js ~ line 16 ~ uploadQuote ~ quote`, quote)
    const query = gql`mutation MyMutation {
            addQuote(input: {quoteBody: "${quote.quoteBody}", originalText: "${quote.originalText}", author: {name: "${quote.author}"}})
            { numUids}
          }`
    console.log(`🚀 ~file: quotes.js ~line 19 ~uploadQuote ~query`, query)
    try {
    await dgraph.request(query).then((data) => {
        console.log(`🚀 ~ file: index.dgraph.json.js ~ line 18 ~ awaitdgraph.request ~ data`, data)
        dgraph_quotes = data.queryQuote
        console.log(`🚀 ~ file: index.dgraph.json.js ~ line 19 ~ awaitdgraph.request ~ dgraph_quotes`, dgraph_quotes)
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

export const deleteQuote = (id) => {
    addedQuotes.update((cur) => {
        const newQuotes = cur.filter(quote => quote.id !== id)
        console.log(`🚀 ~ file: quotes.js ~ line 47 ~ addedQuotes.update ~ newQuotes`, newQuotes)
        addedQuotes.set(newQuotes)
        return newQuotes
    })
}

export const getAllQuotesFromDB = async () => {
    let dgraph_quotes
    try {
        const query = getAllQuotes
        await dgraph.request(query).then((data) => {
            console.log(`🚀 ~ file: index.dgraph.json.js ~ line 18 ~ awaitdgraph.request ~ data`, data)
            dgraph_quotes = data.queryQuote
            console.log(`🚀 ~ file: index.dgraph.json.js ~ line 19 ~ awaitdgraph.request ~ dgraph_quotes`, dgraph_quotes)
        })
        return {
            status: 200,
            body: { dgraph_quotes }
        }
    } catch (error) {
        return {
            body: { error: 'There was a server error: ', error }
        }
    }
}
const getAllQuotes = gql`query MyQuery {
    queryQuote {
      id
      quoteBody
      author {
        name
      }
    }
    }
  `


export const storedQuotesFile = {
    subscribe: quotesFile.subscribe,
    set: val => {
        quotesFile.set(val);
        localStorage.setItem("quotesFile", JSON.stringify(val));
    }
};

export const storedFileContent = {
    subscribe: fileContent.subscribe,
    set: val => {
        fileContent.set(val);
        localStorage.setItem("fileContent", JSON.stringify(val));
    }
};

export const storedQuotesArray = {
    subscribe: quotesArray.subscribe,
    set: val => {
        quotesArray.set(val);
        localStorage.setItem("quotesArray", JSON.stringify(val));
    }
};

export const storeCurrentQuote = {
    subscribe: currentQuote.subscribe,
    set: val => {
        currentQuote.set(val);
        localStorage.setItem("currentQuote", JSON.stringify(val));
    },
    get: () => {
        return localStorage.getItem("currentQuote");
    }
};