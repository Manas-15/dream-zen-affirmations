-- Ensure RLS is properly configured for newsletter_subscribers table
-- Drop any existing permissive SELECT policies
DROP POLICY IF EXISTS "Enable read access for all users" ON public.newsletter_subscribers;

-- Ensure RLS is enabled
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Ensure INSERT policy exists (already should exist)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'newsletter_subscribers' 
    AND policyname = 'Anyone can subscribe to newsletter'
  ) THEN
    CREATE POLICY "Anyone can subscribe to newsletter"
      ON public.newsletter_subscribers
      FOR INSERT
      WITH CHECK (true);
  END IF;
END $$;

-- No SELECT policy means no one can read the emails (except service role)
-- This protects subscriber privacy