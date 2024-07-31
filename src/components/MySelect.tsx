import { useState } from 'react';
import Image from "next/image";
import PropTypes from 'prop-types';

export default function MySelect({data=[], placeholder="aaa"}) {

   // const {
   //    data,
   //    placeholder
   // } = props;

   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(`${placeholder}`);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
   };

   return (
      <div className={"relative inline-block w-64"}>
         <button
            onClick={toggleDropdown}
            className="block w-full p-2.5 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-[25px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
         >
         {selectedOption}

         <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <Image
               className="mx-1"
               src="/dropdown.svg"
               alt=""
               width={10}
               height={10}
            />
         </span>

         {/* <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
               className="fill-current h-4 w-4"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
            >
               <path d="M5.516 7.548a.5.5 0 00.712 0l4.254-4.252a.5.5 0 01.712 0l4.254 4.252a.5.5 0 00.712-.712L11.182 1.772a1.5 1.5 0 00-2.122 0L4.804 6.836a.5.5 0 00.712.712zM14.482 10.704a.5.5 0 00-.712 0l-4.254 4.252a.5.5 0 01-.712 0l-4.254-4.252a.5.5 0 00-.712.712l4.252 4.254a1.5 1.5 0 002.122 0l4.254-4.252a.5.5 0 00-.712-.712z" />
            </svg>
         </span> */}
         </button>
         {isOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1">
               {data.map((option) => (
                  <li
                     key={option}
                     onClick={() => handleOptionClick(option)}
                     className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                     {option}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );

}

MySelect.propTypes = {
   data: PropTypes.array,
   placeholder: PropTypes.string,
};

// MySelect.defaultProps = {
//    data: [],
//    placeholder: "Select option",
// };
