import { createClient } from '@supabase/supabase-js';

// Leemos las credenciales ocultas del archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificamos que las variables existan para evitar errores
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Faltan las credenciales de Supabase en el archivo .env");
}

// Creamos y exportamos la conexión oficial
export const supabase = createClient(supabaseUrl, supabaseAnonKey);