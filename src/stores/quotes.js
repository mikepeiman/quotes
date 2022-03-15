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
    if (!quote.id) {
        console.log(`🚀 ~ file: quotes.js ~ line 17 ~ addQuote ~ addedQuotes inside id check: `, get(addedQuotes), ` --- QUOTE: `, quote)
        quote.id = uuidv4()
    }
    let exists = checkIfQuoteExists(quote)
    exists ? console.log(`🚀 ~ file: quotes.js ~ line 21 ~ addQuote ~ quote exists`) : console.log(`🚀 ~ file: quotes.js ~ line 23 ~ addQuote ~ quote does not exist`)
    !exists ? quotesArray.update((cur) => [quote, ...cur]) : false;
    storedQuotesArray.set(get(quotesArray))
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

export const deleteQuote = (q) => {
    console.log(`🚀 ~ file: quotes.js ~ line 54 ~ deleteQuote ~ id`, q.id, q.quoteBody)
    if (q.id) {
        quotesArray.update((cur) => cur.filter((quote) => quote.id !== q.id))
        storedQuotesArray.set(get(quotesArray))
        addedQuotes.update((cur) => cur.filter((quote) => quote.id !== q.id))
    } else {

        // filter quotes array and remove quote with matching quoteBody and author.name

        let quotes = get(quotesArray)
        let len = quotes.length
        console.log(`🚀 ~ file: quotes.js ~ line 67 ~ deleteQuote ~ len`, len)
        quotes.filter(quote => {
            return quote.quoteBody !== q.quoteBody && quote.author.name !== q.author.name
        })
        len = quotes.length
        console.log(`🚀 ~ file: quotes.js ~ line 72 ~ deleteQuote ~ len after filter`, len)


        // quotesArray.update(cur => cur.filter((quote) => (quote.quoteBody != q.quoteBody && quote.author.name != q.author.name)))
        quotesArray.update(cur => cur.filter((quote) => (quote.quoteBody !== q.quoteBody)))
        storedQuotesArray.set(get(quotesArray))
        // storedQuotesArray.set(quotes.filter((quote) => quote.quoteBody !== q.quoteBody && quote.author.name !== q.author.name))
    }

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

function checkIfQuoteExists(quote) {
    console.log(`🚀 ~ file: quotes.js ~ line 135 ~ checkIfQuoteExists ~ quote`, quote)
    let foundMatch = false
    let quotes = get(quotesArray)
    console.log(`🚀 ~ file: quotes.js ~ line 111 ~ checkIfQuoteExists ~ quotes`, quotes)
    for (let i = 0; i < quotes.length; i++) {
        let q = quotes[i]
        let x = quotes[100]
        console.log(`🚀 ~ file: quotes.js ~ line 142 ~ checkIfQuoteExists ~ x`, x)
        if (q.quoteBody == quote.quoteBody && q.author.name == quote.author.name) {
            console.log(`🚀 ~ file: quotes.js ~ line 141 ~ checkIfQuoteExists ~ quote.author.name`, quote.author.name)
            console.log(`🚀 ~ file: quotes.js ~ line 141 ~ checkIfQuoteExists ~ quote.quoteBody`, quote.quoteBody)
            console.log(`🚀 ~ file: quotes.js ~ line 116 ~ checkIfQuoteExists ~ q.quoteBody === quote.quoteBody`, q.quoteBody === quote.quoteBody)
            foundMatch = true
            console.log(`🚀 ~ file: quotes.js ~ line 143 ~ checkIfQuoteExists ~ foundMatch`, foundMatch)
            return true
        }
        break
    }
    return foundMatch
}