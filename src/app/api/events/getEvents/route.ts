import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {
  const req: { filter:boolean, keyword:string } = await request.json();
  const filter = req.filter;

  let tempFilter = JSON.parse(req.keyword);
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
        .order('Event Date', { ascending: true })
        .order('Time Start', { ascending: true });
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
              .order('Event Date',{ ascending: true })
              .order('Time Start', {ascending: true});         
          }else{
        console.log(3);
        res = await supabase
              .from('events')
              .select()
              .ilike('Event Type', `%${tempFilter.type}%`)
              .gte('age', Number(tempFilter.age))
              .ilike('Music Type', `%${tempFilter.music}%`)
              .gte('Ticket Price', Number(tempFilter.charge))
              .order('Event Date',{ ascending: true })
              .order('Time Start', {ascending: true});
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
            .order('Event Date',{ ascending: true })
            .order('Time Start', {ascending: true});
        }
      }
        
      const { data, error } = res;
      let temp = [];
        console.log(tempFilter.keyword);
      for (let i = 0; i < data.length; i++) {
        if (data[i]["Event Name"].toLowerCase().includes(tempFilter.keyword.toLowerCase()) || 
            data[i]["Music Type"].toLowerCase().includes(tempFilter.keyword.toLowerCase()) || 
            data[i]["DJ Name"].toLowerCase().includes(tempFilter.keyword.toLowerCase()) || 
            data[i]["Venue Type"].toLowerCase().includes(tempFilter.keyword.toLowerCase())) {
          temp.push(data[i]);
        }
      }
      temp.forEach(event => {
        const distance = calculateDistance(event.latitude, event.longitude, Number(tempFilter.lati), Number(tempFilter.lng));
        event.distance = distance/1609.34; // Add the distance to each event object
      });
    

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

function calculateDistance(lat1, lon1, lat2, lon2) {
  
  const R = 6371e3; // Radius of the earth in meters
  const φ1 = lat1 * (Math.PI / 180); // φ, λ in radians
  const φ2 = lat2 * (Math.PI / 180);
  const Δφ = (lat2 - lat1) * (Math.PI / 180);
  const Δλ = (lon2 - lon1) * (Math.PI / 180);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in meters
  return d;
}

