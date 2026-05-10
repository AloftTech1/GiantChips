/*
  # Create newsletter signups table

  1. New Tables
    - `newsletter_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `newsletter_signups` table
    - Add policy to allow public inserts (for signup form)
    - Add policy to allow service role to read all data
*/

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for newsletter signups
CREATE POLICY "Allow public newsletter signups"
  ON newsletter_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all signups
CREATE POLICY "Allow service role to read signups"
  ON newsletter_signups
  FOR SELECT
  TO service_role
  USING (true);
