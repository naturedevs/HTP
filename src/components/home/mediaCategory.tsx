import Image from "next/image";
import PropTypes from 'prop-types';

export default function MediaCategory(props) {

   const {title} = props;

   return(
      <div className="w-full flex">
         <p className="md:font-[400] md:text-[17px] md:leading-[18.5px] font-[400] text-[14px] leading-[15.23px] text-[#1F1E1E] mt-1 line-clamp-2 flex-1">{title}</p>
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

MediaCategory.propTypes = {
   title: PropTypes.string,
};
 
MediaCategory.defaultProps = {
   title: "Lainey Wilson: Country's Cool Again Tour",
};