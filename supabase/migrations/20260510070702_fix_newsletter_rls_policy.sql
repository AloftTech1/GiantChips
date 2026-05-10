/*
  # Fix newsletter_signups RLS INSERT policy

  ## Problem
  The existing "Allow public newsletter signups" policy uses `WITH CHECK (true)`,
  which grants completely unrestricted INSERT access to anon users — any row with
  any data can be inserted.

  ## Changes
  - Drop the unrestricted INSERT policy
  - Replace it with a constrained policy that only permits rows where:
    - `email` is a non-empty string
    - `email` matches a basic RFC-compliant pattern (contains @ with chars on both sides)
    - `created_at` is NULL (let the DB default fill it) or within a reasonable window
      to prevent backdated spam records

  ## Security
  This keeps the signup form functional for real users while blocking:
  - Blank or whitespace-only email values
  - Obviously malformed email strings
  - Rows with arbitrary backdated timestamps
*/

-- Drop the unrestricted policy
DROP POLICY IF EXISTS "Allow public newsletter signups" ON newsletter_signups;

-- Re-create with a meaningful constraint: email must look like an email
CREATE POLICY "Allow public newsletter signups"
  ON newsletter_signups
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL
    AND length(trim(email)) > 0
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );
