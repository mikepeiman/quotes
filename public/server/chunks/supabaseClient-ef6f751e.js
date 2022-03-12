import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nnlhldhudoyhcxzzmoxu.supabase.co";
console.log(`\u{1F680} ~ file: supabaseClient.js ~ line 4 ~ supabaseUrl`, supabaseUrl);
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubGhsZGh1ZG95aGN4enptb3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUyODAyNjEsImV4cCI6MTk2MDg1NjI2MX0.7l9_jqyx-aP3xctjSSxkdvyjugMi5XjmAiOuz27Ixi";
console.log(`\u{1F680} ~ file: supabaseClient.js ~ line 6 ~ supabaseAnonKey`, supabaseAnonKey);
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export { supabase as s };
