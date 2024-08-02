import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req = await request.json();
  const id = parseInt(req.id);
  const { data, error }  = await supabase
      .from('events')
      .select(`*, tickets(*, ticket_type_list(*))`)
      .eq('id', id)
      .single();
  if(error) return new NextResponse(JSON.stringify(error), {status: 400})
  return new NextResponse(JSON.stringify(data.tickets), {status: 200});
}



