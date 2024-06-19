import { JsonObject } from "type-fest";

export interface IEvent {
  id: string;
  created_time: string;
  dj_name: string;
  event_date: string;
  event_image: string;
  event_name: string;
  event_type: string;
  music_type: string;
  ticket_link: string;
  ticket_price: string;
  end_time: string;
  start_time: string;
  venue_address: string;
  venue_city: string;
  venue_state: string;
  venue_type: string;
  zip_code: string;
  age: string;
  longitude: string;
  latitude: string;
}

export const fetchEvents = async ({filter, keyword}:{filter:boolean, keyword:string}) => {
  try {
    const response = await fetch(`/api/events/getEvents`, {
      body: JSON.stringify({ filter: filter, keyword: keyword }),
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
    });
    if (response.ok) {
      const data: IEvent[] = await response.json();
      return {isSuccess:true, data}
    } else {
      const data = await response.json();
      return {isSuccess:false, data}      
    }
  } catch (error) {
    return {isSuccess:false, data:error.message}      
  }
};
