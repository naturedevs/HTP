import { url } from "inspector";
import Image from "next/image";

export default function MediaItem() {

   return(
      <div className="w-full">
         <div className="w-full h-[229px]" style={{ backgroundImage: "url('/homeBg4_1.svg')" }}></div>
         <div className="w-full flex items-center mt-1">
            <Image
               src="/avatar1.svg"
               alt=""
               width={34}
               height={34}
            />
            <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>
            <p className="text-[#777777] text-[14px] leading-[14px] ml-2">|</p>
            <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
         </div>

         <p className="md:font-[500] md:text-[21px] md:leading-[27px] font-[700] text-[22px] leading-[27px] text-black mt-1">Grad your spot fast before all the seats fill up.</p>

         <p className="md:font-[400] md:text-[16px] md:leading-[22px] font-[700] text-[22px] leading-[27px] text-[#010101] mt-1">Grad your spot fast before all the seats fill up, don’t miss it.....</p>

         <div className="flex justify-start mt-3">
            <button className="md:w-[167px] md:h-[51px] w-[116px] h-[39px] rounded-[25.5px] bg-primaryColor md:font-[600] md:text-[17px] md:leading-[18.5px] text-[#FFFFFF]">
               READ MORE
            </button>
         </div>
      </div>
   );
}