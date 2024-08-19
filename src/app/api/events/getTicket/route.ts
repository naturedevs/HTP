import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req = await request.json();
  const { data, error }  = await supabase
      .from('tickets')
      .select(`*, ticket_type_list(*)`)
      .eq('id', req.id)
      .single();
      console.log(error)
  if(error) return new NextResponse(JSON.stringify(error), {status: 400})
  return new NextResponse(JSON.stringify(data), {status: 200});
}



