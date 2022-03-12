import { writable } from "svelte/store"
import { supabase } from '$lib/supabaseClient.js'
const settingsChange = writable({})

export const storedSettingsChange = {
    subscribe: settingsChange.subscribe,
    set: val => {
        console.log(`🚀 ~ file: stores.js ~ line 8 ~ val`, val)
        settingsChange.set(val);
        localStorage.setItem("settingsChange", JSON.stringify(val));
    }
};

export const loadQuotes = async () => {
    const { data, error } = await supabase.from('quotes').select('*').run()
    // console.log(`🚀 ~ file: stores.js ~ line 16 ~ quotes`, data)
    if (error) {
        return console.error(error)
    }
    return data
}

export const addQuote = async (quote) => {
    const { data, error } = await supabase.from('quotes').insert(quote)
    // quotes.set([...quotes.get(), quote])
    quotes.update((cur) => [...cur, data[0]])
}
 
export const deleteQuote = (id) => {
    supabase.from('quotes').where('id', id).delete().run()
    const {error} = supabase.from('quotes').delete().match({id})
    quotes.update((cur) => {
        const newQuotes = cur.filter(quote => quote.id !== id)
        return newQuotes
    })
} 

// toggleTodoCompleted @ 13:30 in video https://www.youtube.com/watch?v=YqIyET7XKIQ