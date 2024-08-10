import { NextResponse } from "next/server";
import supabase from "@/supabase/supabaseClient";

export async function POST(request: Request, params: { action: string }) {
  const req: {
    e_type: number | null;
    m_type: number | null;
    a_type: number | null;
  } = await request.json();
  const conditions = [];
  if (req.e_type) conditions.push(`event_type.eq.${req.e_type}`);
  if (req.m_type) conditions.push(`music_type.eq.${req.m_type}`);
  if (req.a_type) conditions.push(`age_type.eq.${req.a_type}`);
  // conditions.push(`event_type.is.null`);
  // conditions.push(`music_type.is.null`);
  // conditions.push(`age_type.is.null`);

  const orCondition = conditions.join(",");
  console.log(orCondition, typeof orCondition);
  if (orCondition == "") {
    const { data, error } = await supabase
      .from("events")
      .select(
        `*, tickets(*, ticket_type_list(*)), event_type_list(*), venue_type_list(*), age_type_list(*), music_type_list(*)`
      )
      .eq("is_paid", true)
    console.log(error);
    if (error) return new NextResponse(JSON.stringify(error), { status: 400 });
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } else {
    const { data, error } = await supabase
      .from("events")
      .select(
        `*, tickets(*, ticket_type_list(*)), event_type_list(*), venue_type_list(*), age_type_list(*), music_type_list(*)`
      )
      .eq("is_paid", true)
      .or(orCondition);
    console.log(error);
    if (error) return new NextResponse(JSON.stringify(error), { status: 400 });
    return new NextResponse(JSON.stringify(data), { status: 200 });
  }
}
