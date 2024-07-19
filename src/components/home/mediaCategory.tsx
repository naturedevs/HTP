import { url } from "inspector";
import Image from "next/image";

export default function MediaCategory() {

   return(
      <div className="w-full flex">
         <p className="md:font-[400] md:text-[17px] md:leading-[18.5px] font-[400] text-[14px] leading-[15.23px] text-[#1F1E1E] mt-1 line-clamp-2 flex-1">Lainey Wilson: Country's Cool Again Tour</p>
         <Image
            src="/media_arrow.svg"
            alt=""
            width={16}
            height={9}
            className="ml-2"
         />
      </div>
   );
}