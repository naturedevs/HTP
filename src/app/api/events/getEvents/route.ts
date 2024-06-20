import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req: { filter:boolean, keyword:string } = await request.json();
  const filter = req.filter;
  try{
    if(!filter){
      const { data, error } = await supabase
        .from('events')
        .select()
        .order('Event Date',{ ascending: false });

      if(error){
        return NextResponse.json(error.message, { status: 401 });
      }else {
        return NextResponse.json(JSON.stringify(data), { status: 200 });
      }
    }else{
      let tempFilter = JSON.parse(req.keyword);
      let res = null;

      if (tempFilter.charge === "") {
        res = await supabase
          .from('events')
          .select()
          .ilike('Event Type', `%${tempFilter.type}%`)
          .gte('age', Number(tempFilter.age))
          .ilike('Music Type', `%${tempFilter.music}%`)
          .order('Event Date',{ ascending: false });
      }else{
        if (!tempFilter.charge.includes("-")) {
          if (tempFilter.charge === "0") {
            res = await supabase
              .from('events')
              .select()
              .ilike('Event Type', `%${tempFilter.type}%`)
              .gte('age', Number(tempFilter.age))
              .ilike('Music Type', `%${tempFilter.music}%`)
              .lte('Ticket Price', 0)
              .order('Event Date',{ ascending: false });          
          }else{
            res = await supabase
              .from('events')
              .select()
              .ilike('Event Type', `%${tempFilter.type}%`)
              .gte('age', Number(tempFilter.age))
              .ilike('Music Type', `%${tempFilter.music}%`)
              .gte('Ticket Price', Number(tempFilter.charge))
              .order('Event Date',{ ascending: false });
          }
        }else{
          res = await supabase
            .from('events')
            .select()
            .ilike('Event Type', `%${tempFilter.type}%`)
            .gte('age', Number(tempFilter.age))
            .ilike('Music Type', `%${tempFilter.music}%`)
            .gte('Ticket Price', Number(tempFilter.charge.split("-")[0]))
            .lte('Ticket Price', Number(tempFilter.charge.split("-")[1]))
            .order('Event Date',{ ascending: false });
        }
      }
        
      const { data, error } = res;

      if(error){
        return NextResponse.json(error.message, { status: 401 });
      }else {
        return NextResponse.json(JSON.stringify(data), { status: 200 });
      }
    }
  }catch(error){
    console.error('Error fetching users:', error);
    return NextResponse.json('Error fetching users', { status: 401 });
  }
}
