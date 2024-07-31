import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function GET(request: Request, params: { action: string }) {

  const { data, error }  = await supabase
      .from('events')
      .select(`*, tickets(*)`);
  if(error) return new NextResponse(JSON.stringify(error), {status: 400})
  return new NextResponse(JSON.stringify(data), {status: 200});
}



