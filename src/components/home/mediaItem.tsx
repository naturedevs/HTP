import { url } from "inspector";
import Image from "next/image";

export default function MediaItem() {

   return(
      <div className="w-full">
         <div className="w-full h-[229px]" style={{ backgroundImage: "url('/homeBg4_1.svg')" }}>
         </div>
         <div>
            creator
         </div>
         <div>
            title
         </div>
         <div>
            description
         </div>
         <div>
            read more
         </div>
      </div>
   );
}