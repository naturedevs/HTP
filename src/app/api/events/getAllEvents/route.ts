import { NextResponse } from "next/server";
import supabase from "@/supabase/supabaseClient";
import calculateDistance from '@/utils/calculateDistance';

export async function POST(request: Request, params: { action: string }) {
  const req: {
    e_type: number | null;
    m_type: number | null;
    a_type: number | null;
    c_charge: {
      from: number | null,
      to: number | null
    }
    distance: {
      from: number | null,
      to: number | null
    }
    keyword: string | null;
    date: Date | null;
    location:{
      long: number |null,
      lati: number | null
    }
  } = await request.json();

  let query = supabase
    .from("events")
    .select(
      `*, tickets(*, ticket_type_list(*)), event_type_list(*), venue_type_list(*), age_type_list(*), music_type_list(*)`
    )
    .eq("is_paid", true);

  if (req.e_type) query = query.eq("event_type", req.e_type);
  if (req.m_type) query = query.eq("music_type", req.m_type);
  if (req.a_type) query = query.eq("age_type", req.a_type);
  if (req.c_charge) {
    console.log(req.c_charge, 'ddfdfdfd')
    if (req.c_charge.from >0  && req.c_charge.from == req.c_charge.to) {
      query = query.gte(`cover_charge`, req.c_charge.from);
    }else {
      console.log(req.c_charge, 'cover charge')
      query = query.gte(`cover_charge`, req.c_charge.from);
      query = query.lte(`cover_charge`, req.c_charge.to);
    }
  }

  if (req.keyword) {
    query = query.like(`name`, `%${req.keyword}%`);
    query = query.like(`dj_name`, `%${req.keyword}%`);
    query = query.like(`venue_name`, `%${req.keyword}%`);
  }
  if (req.date) query = query.eq(`date`, req.date);


  const { data, error } = await query;

   if(req.distance){
    const _data = data.filter((item, index) => {
      console.log('ddd',req.location.lati, req.location.long, item.location_lati, item.location_lng)
      let _dist = calculateDistance(req.location.lati, req.location.long, item.location_lati, item.location_lng);
      let _distance = _dist * 0.62;
      console.log(_distance, 'distance ========')
      if(req.distance.from == req.distance.to) {
        return _distance >= req.distance.to;
      } else {
        return _distance >= req.distance.from && _distance <= req.distance.to
      }
     });
     if (error) return new NextResponse(JSON.stringify(error), { status: 400 });
     return new NextResponse(JSON.stringify(_data), { status: 200 });
   } else {
    return new NextResponse(JSON.stringify(data), { status: 200 });
   }
  
}
