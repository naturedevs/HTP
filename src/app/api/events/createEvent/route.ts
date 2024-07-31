import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

const saveFile = async (formData, key) => {
    const file = formData.get(key) as File;
    if (file instanceof File) {
        const fileData = Buffer.from(await file?.arrayBuffer());
        const fileName = `${Date.now()}${file.name.substring(file.name.lastIndexOf('.'))}`; // Change the filename if needed
        const { error } = await supabase.storage.from('upload_img').upload(fileName, fileData)
        console.log(error)
        const { data } = supabase.storage.from('upload_img').getPublicUrl(fileName)
        return data.publicUrl;
    }
    return "";
}

export async function POST(request: Request, params: { action: string }) {
    const formData = await request.formData();
    const imgUrl = await saveFile(formData, "imgFile");
    let main_info = formData.get('main_info');
    let ticketList = formData.get('ticketList');

    const {
        eventName, eventType, musicType, djName, venueName, dressCode, venueType, venueAddress, ageRestrictions, coverCharge, eventDate, eventStart, eventEnd
    } = JSON.parse(main_info as string);
    ticketList = JSON.parse(ticketList as string);

    const { error } = await supabase
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
            age_restrictions: ageRestrictions,
            cover_charge: coverCharge,
            event_date: eventDate,
            event_start_time: eventStart,
            event_end_time: eventEnd,
            img_file: imgUrl
        });

    if (error) NextResponse.json(JSON.stringify(error), { status: 400 })
    return NextResponse.json('ok', { status: 200 });
}

