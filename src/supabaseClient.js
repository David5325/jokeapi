import { createClient } from '@supabase/supabase-js';

// Reemplaza con la URL de tu proyecto y la clave pública (anon key) que obtuviste antes
const supabaseUrl = 'https://tebnqemnqziskjrxxhww.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlYm5xZW1ucXppc2tqcnh4aHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTA3OTIsImV4cCI6MjA2NDE4Njc5Mn0.vOtFDpTbe6J2DYQxCu4N3BtHsRkzqjKbspAmsyjt_io';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
