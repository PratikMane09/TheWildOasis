import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hieabqetlydqfhgqkibr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZWFicWV0bHlkcWZoZ3FraWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNTUyODcsImV4cCI6MjAyNzYzMTI4N30.ceIRDWtR2tosCpcq2UpgTnUZ2mna6aZNnVWkVdDOKXA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
