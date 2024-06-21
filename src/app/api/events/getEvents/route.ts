import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req: { filter:boolean, keyword:string } = await request.json();
  const filter = req.filter;

  try{
    let res = null;
    if(!filter){
      console.log(4);
      res = await supabase
        .from('events')
        .select()
        .order('Event Date',{ ascending: true})
        .order('Time Start', {ascending: true});
    }else{      
      let tempFilter = JSON.parse(req.keyword);
      console.log(111);

      if (tempFilter.charge === "") {
        console.log(11);
        res = await supabase
          .from('events')
          .select()
          .ilike('Event Type', `%${tempFilter.type}%`)
          .gte('age', Number(tempFilter.age))
          .ilike('Music Type', `%${tempFilter.music}%`)
          .order('Event Date',{ ascending: false })
          .order('Time Start', {ascending: false});
      }else{
        console.log(1);
        if (!tempFilter.charge.includes("-")) {
          if (tempFilter.charge === "0") {
        console.log(2);
        res = await supabase
              .from('events')
              .select()
              .ilike('Event Type', `%${tempFilter.type}%`)
              .gte('age', Number(tempFilter.age))
              .ilike('Music Type', `%${tempFilter.music}%`)
              .lte('Ticket Price', 0)
              .order('Event Date',{ ascending: false })
              .order('Time Start', {ascending: false});         
          }else{
        console.log(3);
        res = await supabase
              .from('events')
              .select()
              .ilike('Event Type', `%${tempFilter.type}%`)
              .gte('age', Number(tempFilter.age))
              .ilike('Music Type', `%${tempFilter.music}%`)
              .gte('Ticket Price', Number(tempFilter.charge))
              .order('Event Date',{ ascending: false })
              .order('Time Start', {ascending: false});
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
            .order('Event Date',{ ascending: false })
            .order('Time Start', {ascending: false});
        }
      }
        
      const { data, error } = res;
      console.log(data);
      let temp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i]["Event Name"].includes(tempFilter.keyword) || data[i]["Music Type"].includes(tempFilter.keyword) || data[i]["DJ Name"].includes(tempFilter.keyword) || data[i]["Venue Type"].includes(tempFilter.keyword)) {
          temp.push(data[i]);
        }
      }
      console.log(temp);

      if(error){
        return NextResponse.json(error.message, { status: 401 });
      }else {
        return NextResponse.json(JSON.stringify(temp), { status: 200 });
      }
    }
  }catch(error){
    console.error('Error fetching users:', error);
    return NextResponse.json('Error fetching users', { status: 401 });
  }
}
