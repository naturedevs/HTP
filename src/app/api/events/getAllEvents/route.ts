import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function GET(request: Request, params: { action: string }) {

  const { data, error }  = await supabase
      .from('events')
      .select(`*, tickets(*, ticket_type_list(*)), event_type_list(*), venue_type_list(*), age_type_list(*), music_type_list(*)`)
      .eq('is_paid', true);
      console.log(error)
  if(error) return new NextResponse(JSON.stringify(error), {status: 400})
  return new NextResponse(JSON.stringify(data), {status: 200});
}



