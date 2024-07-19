import Image from "next/image";
import PropTypes from 'prop-types';

export default function EventItem({e_day, e_time, title, description, position, subject}) {

   return(
      <div className="w-full flex border-b-2 border-[#DEDDDD] pt-5 pb-5">
         <div className="md:w-[120px] h-full">
            <div className="md:w-[90px] md:h-[76px] bg-primaryColor flex items-center justify-center flex-col">
               <p className="md:font-[400] md:text-[25px] md:leading-[27px] font-[400] text-[25px] leading-[27px] text-white">{e_day}</p>
               <p className="md:font-[400] md:text-[25px] md:leading-[27px] font-[400] text-[25px] leading-[27px] text-white">{e_time}</p>
            </div>
         </div>
         <div className="flex-1 flex flex-col space-y-1">
            <div className="flex">
               <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{e_day}</p>
               <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{e_time}</p>
            </div>
            <p className="md:font-[500] md:text-[23px] md:leading-[25px] font-[500] text-[23px] leading-[25px] text-black">{title}</p>
            <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{description}</p>
            <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{position}</p>
            <p className="md:font-[400] md:text-[17px] md:leading-[18px] font-[400] text-[17px] leading-[18px] text-[#7D7D7D]">{subject}</p>
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
   e_day: PropTypes.string,
   e_time: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   position: PropTypes.string,
   subject: PropTypes.string,
};
 
EventItem.defaultProps = {
   e_day: "Wed",
   e_time: "7:00",
   title: "Empower Federal Credit Union Amphitheater at Lakeview",
   description: "Lainey Wilson: Country's Cool Again Tour",
   position: "Syracuse, NY",
   subject: "BankPlus Amphitheater at Snowden Grove, Southaven, MS",
};