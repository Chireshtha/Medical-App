import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://jlxrcptpgtdjurbeobch.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpseHJjcHRwZ3RkanVyYmVvYmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NDg2NzUsImV4cCI6MjA2ODMyNDY3NX0.sIdenz6N2gEbX1cseRRNY4kXdpZR71cXRYFfNW7KEYo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
