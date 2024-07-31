import { NextResponse } from 'next/server';
import supabase from '@/supabase/supabaseClient';

export async function POST(request: Request, params: { action: string }) {

    const formData = await request.formData();
    console.log(formData)
    return NextResponse.json('ok', { status: 200 });
  

}

