import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';
import multer from 'multer';
const  upload = multer({ dest: 'uploads/' });
export async function POST(request: Request, params: { action: string }) {
    upload(request)
    const formData = await request.formData();

    let main_info = formData.get('main_info');
    let ticketList = formData.get('ticketList');
    let imgFile = formData.get('imgFile');
    
    const {
        eventName, eventType, musicType, djName, venueName, dressCode, venueType, venueAddress, ageRestrictions, coverCharge, eventDate, eventStart, eventEnd
    } = JSON.parse(main_info as string);
    ticketList = JSON.parse(ticketList as string);
    
    const {error} = await supabase
        .from('events')
        .insert({
            event_name: eventName,
            event_type: eventType,
            music_type: musicType,
            dj_name: djName,
            venue_name: venueName,
            dress_code: dressCode,
            venue_type: venueType,
            venue_address: venueAddress,
            age_regstrictions: ageRestrictions,
            cover_charge: coverCharge,
            event_date: eventDate,
            event_start_time: eventStart,
            event_end_time: eventEnd
        });

    if( error ) return NextResponse.json(JSON.stringify(error), {status: 500})
    return NextResponse.json('ok', { status: 200 });
}

