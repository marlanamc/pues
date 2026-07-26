import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Service-role client for admin scripts (uploads, migrations). Never use in the browser. */
export function createScriptClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env"
    );
  }
  return createClient(url, key);
}
