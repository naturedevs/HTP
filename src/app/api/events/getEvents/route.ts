import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req: { filter:boolean } = await request.json();
  const filter = req.filter;
  try{
    if(!filter){
      const { data, error } = await supabase
        .from('events')
        .select()
        // .neq('title', 'super')
        .order('Created_Time',{ ascending: true });

      if(error){
        return NextResponse.json(error.message, { status: 401 });
      }else {
        console.log(data);
        return NextResponse.json(JSON.stringify(data), { status: 200 });
      }
    }else{
    }
  }catch(error){
    console.error('Error fetching users:', error);
    return NextResponse.json('Error fetching users', { status: 401 });
  }
}
