import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/** Server-side client with service role (full access, bypasses RLS) */
export function createServerClient() {
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })
}

/** Server-side client with anon key (respects RLS) */
export function createAnonClient() {
  return createClient(supabaseUrl, anonKey, {
    auth: { persistSession: false },
  })
}
