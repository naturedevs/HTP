import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function GET(request: Request, params: { action: string }) {
  const req: { filter:boolean, keyword:string } = await request.json();

  const { data, error }  = await supabase
      .from('events')
      .select(`*, tickets(*)`);
  console.log(data);
  return new NextResponse("", {status: 200});
}



