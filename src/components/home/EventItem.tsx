import Image from "next/image";
import PropTypes from 'prop-types';
import moment from 'moment';

export default function EventItem({event}) {

   const month = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Sep', 'Nob', 'Dec'];
   const day = ['Sun', 'Mon', 'Thu', 'Wed', 'Thi', 'Fri', 'Sat']
   return(
      <div className="w-full flex border-b-2 border-[#DEDDDD] pt-5 pb-5">
         <div className="md:w-[120px] h-full">
            <div className="md:w-[90px] md:h-[76px] bg-primaryColor flex items-center justify-center flex-col rounded">
               <p className="md:font-[400] md:text-[25px] md:leading-[27px] font-[400] text-[25px] leading-[27px] text-white">{month[parseInt(moment(event.date).format('MM'))]}</p>
               <p className="md:font-[400] md:text-[25px] md:leading-[27px] font-[400] text-[25px] leading-[27px] text-white">{moment(event.date).format('DD')}</p>
            </div>
         </div>
         <div className="flex-1 flex flex-col space-y-1">
            <div className="flex">
               <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{day[(new Date(event.date)).getDay()]}</p>
               <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{' - ' + moment(event.date).format('hh:mm A')}</p>
            </div>
            <p className="md:font-[500] md:text-[23px] md:leading-[25px] font-[500] text-[23px] leading-[25px] text-black">{event.name}</p>
            <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{event.event_type_list.name + '_' + event.music_type_list.name}</p>
            <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{event.dj_name + '_' + event.dress_code}</p>
            <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{event.venue_type_list.name + '_' + event.venue_name}</p>
         </div>
         <div className="md:w-[245px] flex items-center">
            <button className="w-full md:h-[51px] h-[39px] rounded-[25.5px] bg-primaryColor text-[17px] text-[#FFFFFF]">
               BUY TICKET
            </button>
         </div>
      </div>
   );
}

EventItem.propTypes = {
   event: PropTypes.object
};
