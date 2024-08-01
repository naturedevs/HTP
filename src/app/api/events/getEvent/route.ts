import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req = await request.json();
  console.log(req)
  const { data, error }  = await supabase
      .from('events')
      .select(`*, tickets(*, ticket_type_list(*)), event_type_list(*), venue_type_list(*), age_type_list(*), music_type_list(*)`)
      .eq('id', req.id)
      .single();
      console.log(error)
  if(error) return new NextResponse(JSON.stringify(error), {status: 400})
  return new NextResponse(JSON.stringify(data), {status: 200});
}



