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
      <div className="bg-[#F5F5F5]">
        <div className="max-w-[1280px] m-auto py-[90px]">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
          <p className="text-[37px] leading-[49px] font-bold text-[#000000] my-5">Parties Happening Around You Now</p>
          <p className="text-[17px] leading-[18.5px] text-[#000000]">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
          <div className="flex justify-between py-3">
            <div className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Type of event</option>
                <option value="b">Within 2 mile</option>
                <option value="c">Within 3 mile</option>
              </select>
            </div>
            <div className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Music</option>
                <option value="b">Within 2 mile</option>
                <option value="c">Within 3 mile</option>
              </select>
            </div>
            <div className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Age</option>
                <option value="b">Within 2 mile</option>
                <option value="c">Within 3 mile</option>
              </select>
            </div>
            <div className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5">
              <input 
                type="text"
                value={"Cover Charge"}
                className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-[160px]"
              />
            </div>
            <div className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Distance</option>
                <option value="b">Within 2 mile</option>
                <option value="c">Within 3 mile</option>
              </select>
            </div>
            <button className="w-[264px] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5">
              Search for keyword
            </button>
          </div>
          <div className="grid grid-cols-2 py-7">
            <div className="flex justify-between">
              <div className="bg-primaryColor w-[90px] h-[76.88px] content-center rounded-[4px]">
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">JUN</p>
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="ml-[60px]">
                <div className="flex mb-2">
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="text-[23px] text-[#000000] leading-[25px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-[245px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] leading-[18px]">
                BUY TICKET
              </button>
            </div>
          </div>
          <Image
            src="/line.svg"
            alt=""
            width={1280}
            height={3}
          />
          <div className="grid grid-cols-2 py-7">
            <div className="flex justify-between">
              <div className="bg-primaryColor w-[90px] h-[76.88px] content-center rounded-[4px]">
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">JUN</p>
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="ml-[60px]">
                <div className="flex mb-2">
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="text-[23px] text-[#000000] leading-[25px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-[245px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] leading-[18px]">
                BUY TICKET
              </button>
            </div>
          </div>
          <Image
            src="/line.svg"
            alt=""
            width={1280}
            height={3}
          />
          <div className="grid grid-cols-2 py-7">
            <div className="flex justify-between">
              <div className="bg-primaryColor w-[90px] h-[76.88px] content-center rounded-[4px]">
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">JUN</p>
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="ml-[60px]">
                <div className="flex mb-2">
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="text-[23px] text-[#000000] leading-[25px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-[245px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] leading-[18px]">
                BUY TICKET
              </button>
            </div>
          </div>
          <Image
            src="/line.svg"
            alt=""
            width={1280}
            height={3}
          />
          <div className="grid grid-cols-2 py-7">
            <div className="flex justify-between">
              <div className="bg-primaryColor w-[90px] h-[76.88px] content-center rounded-[4px]">
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">JUN</p>
                <p className="text-[25px] leading-[27px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="ml-[60px]">
                <div className="flex mb-2">
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="text-[23px] text-[#000000] leading-[25px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="text-[17px] leading-[18.5px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-[245px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] leading-[18px]">
                BUY TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;