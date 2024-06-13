import "./home.css";
import Image from "next/image"

function Home() {
  return (
    <div className="w-full">
      <div className="homeBg1 content-center">
        <div className="max-w-[1280px] m-auto grid grid-cols-5">
          <div className="col-span-3">
            <Image
              src="/homeBg1_1.svg"
              alt=""
              width={777}
              height={336}
            />
          </div>
          <div className="relative col-span-2 flex justify-end">
            <form className="relative col-span-2 w-[410px] py-12 px-8 rounded-[30px] ml-8">
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 rounded-[30px]">
              </div>
              <div className="relative">
                <p className="text-[21px] text-[#ffffff] leading-[28px] font-bold">
                  Search parties happening in <br/>
                  your city today, tomorrow, and <br/>
                  this weekend. <br/>
                </p>
                <div className="w-[346px] h-[63px] rounded-[31.5px] border-[1px] border-[#FFFFFF] bg-white flex content-center mt-10">
                  <input 
                    type="text"
                    value={"Enter City/Zipcode"}
                    className="ml-6 text-[17px] leading-[18.5px] text-[#000000] outline-none"
                  />
                </div>
                <div className="w-[346px] h-[63px] rounded-[31.5px] border-[1px] border-[#FFFFFF] bg-white flex content-center mt-5 px-6">
                  <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                    <option value="">Select...</option>
                    <option value="a">Within 1 mile</option>
                    <option value="b">Within 2 mile</option>
                    <option value="c">Within 3 mile</option>
                  </select>
                </div>
                <button className="w-[346px] h-[63px] rounded-[31.5px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5">
                  LETS GO!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;