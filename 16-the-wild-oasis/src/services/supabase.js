import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ijhuqyqkjvpjxxgpgqhz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqaHVxeXFranZwanh4Z3BncWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzODE2MTQsImV4cCI6MjA4OTk1NzYxNH0.8IKGDtmc0xqdklz03Mx7ylyTpjVp9ynNEfhVtjuRLgI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
