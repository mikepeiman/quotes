import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL
console.log(`🚀 ~ file: supabaseClient.js ~ line 4 ~ supabaseUrl`, supabaseUrl)
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
console.log(`🚀 ~ file: supabaseClient.js ~ line 6 ~ supabaseAnonKey`, supabaseAnonKey)

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
