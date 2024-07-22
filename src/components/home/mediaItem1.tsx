import { url } from "inspector";
import Image from "next/image";
import PropTypes from 'prop-types';

export default function MediaItem(props) {

   const {thumbnail, creator, creator_avatar, created_at, title, description} = props;

   return(
      <div className="w-full">
         <div className="w-full h-[229px]" style={{ backgroundImage: `url(${thumbnail})` }}></div>
         <div className="w-full flex items-center mt-1">
            <Image
               src={creator_avatar}
               alt=""
               width={34}
               height={34}
            />
            <p className="text-[#777777] text-[14px] leading-[14px] ml-2">{creator}</p>
            <p className="text-[#777777] text-[14px] leading-[14px] ml-2">|</p>
            <p className="text-[#777777] text-[14px] leading-[14px] ml-2">{created_at}</p>
         </div>
         <p className="md:font-[500] md:text-[21px] md:leading-[27px] font-[700] text-[22px] leading-[27px] text-black mt-1">{title}</p>
         <p className="md:font-[400] md:text-[16px] md:leading-[22px] font-[400] text-[14px] leading-[18px] text-[#010101] mt-1 line-clamp-2">{description}</p>
         <div className="flex justify-start mt-3">
            <button className="md:w-[167px] md:h-[51px] w-[116px] h-[39px] rounded-[25.5px] bg-primaryColor md:font-[600] md:text-[17px] md:leading-[18.5px] text-[#FFFFFF]">
               READ MORE
            </button>
         </div>
      </div>
   );
}

MediaItem.propTypes = {
   thumbnail: PropTypes.string,
   creator: PropTypes.string,
   creator_avatar: PropTypes.string,
   created_at: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string
};
 
MediaItem.defaultProps = {
   thumbnail: '/homeBg4_1.svg',
   creator: 'Jenny kiaa',
   creator_avatar: '/avatar1.svg',
   created_at: '02 April 2022',
   title: 'Grad your spot fast before all the seats fill up.',
   description: 'Grad your spot fast before all the seats fill up, Grad your spot fast before all the seats fill up',
};
