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
                <option value="b">30</option>
                <option value="c">40</option>
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
            <div className="flex justify-end items-center">
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
            <div className="flex justify-end items-center">
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
            <div className="flex justify-end items-center">
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
            <div className="flex justify-end items-center">
              <button className="w-[245px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] leading-[18px]">
                BUY TICKET
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[888px] m-auto py-[90px]">
        <div className="flex justify-center mb-5">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
        </div>
        <div className="flex justify-center my-5">
          <p className="text-[37px] text-[#000000] leading-[49px] font-bold">Host Your Event With House The Party</p>
        </div>

        <div className="flex justify-center my-10 rounded-[6px]">
          <div className="p-3 grid grid-cols-2 drop-shadow-lg rounded-[6px] border-[1px] border-[#F3F3F3]">
            <div className="bg-primaryColor flex items-center rounded-[6px] justify-center h-[58px] w-[305px]">
              <p className="text-[16px] text-[#ffffff] leading-[18px] font-bold">List Your Event </p>
            </div>
            <div className="bg-[#F3F3F3] flex items-center rounded-[6px] justify-center h-[58px] w-[305px]">
              <p className="text-[16px] text-[#212020] leading-[18px] font-bold">List Your Value </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <Image
              src="/homeBg2_1.svg"
              alt=""
              width={416.5}
              height={419.92}
            />
          </div>
          <div className="flex justify-end items-center">
            <div className="w-[345px]">
              <p className="text-center text-[16px] text-primaryColor leading-[18px] font-bold">Step 1</p>
              <p className="text-center text-[30px] leading-[45px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center text-[17px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center">
            <div className="w-[345px]">
              <p className="text-center text-[16px] text-primaryColor leading-[18px] font-bold">Step 2</p>
              <p className="text-center text-[30px] leading-[45px] text-black font-bold my-4">Generate a Ticket Link</p>
              <p className="text-center text-[17px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/homeBg2_2.svg"
              alt=""
              width={416.5}
              height={419.92}
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <Image
              src="/homeBg2_3.svg"
              alt=""
              width={416.5}
              height={419.92}
            />
          </div>
          <div className="flex justify-end items-center">
            <div className="w-[382px]">
              <p className="text-center text-[16px] text-primaryColor leading-[18px] font-bold">Step 3</p>
              <p className="text-center text-[30px] leading-[45px] text-black font-bold my-4">Promote on Our Platform</p>
              <p className="text-center text-[17px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-7">
          <button className="w-[254px] h-[60px] rounded-[30px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5 leading-[19px]">
            GET STARTED
          </button>
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
          <p className="text-[37px] leading-[49px] font-bold text-[#000000] my-5">Upcoming Global Events</p>
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
                <option value="b">30</option>
                <option value="c">40</option>
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
            <div className="flex justify-end items-center">
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
            <div className="flex justify-end items-center">
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
            <div className="flex justify-end items-center">
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
            <div className="flex justify-end items-center">
              <button className="w-[245px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] leading-[18px]">
                BUY TICKET
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1280px] m-auto py-[90px]">
        <div className="flex justify-center mb-5">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
        </div>
        <div className="flex justify-center my-5">
          <p className="text-[37px] text-[#000000] leading-[49px] font-bold">In the Media</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="grid grid-rows-2">
            <div className="w-full h-full">
              <Image
                src="/homeBg4_1.svg"
                alt=""
                width={302}
                height={229}
              />              
            </div>
            <div>
              <div className="flex my-2 items-center">
                <Image
                  src="/avatar1.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                <Image
                  src="/h_line.svg"
                  alt=""
                  width={2}
                  height={12}
                  className="mx-3"
                />
                <Image
                  src="/calendar.svg"
                  alt=""
                  width={11}
                  height={12}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
              </div>
              <p className="text-[#010101] text-[21px] leading-[27px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] text-[16px] leading-[22px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="w-[167px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5 leading-[18.5px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="w-full h-full">
              <Image
                src="/homeBg4_1.svg"
                alt=""
                width={302}
                height={229}
              />              
            </div>
            <div>
              <div className="flex my-2 items-center">
                <Image
                  src="/avatar1.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                <Image
                  src="/h_line.svg"
                  alt=""
                  width={2}
                  height={12}
                  className="mx-3"
                />
                <Image
                  src="/calendar.svg"
                  alt=""
                  width={11}
                  height={12}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
              </div>
              <p className="text-[#010101] text-[21px] leading-[27px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] text-[16px] leading-[22px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="w-[167px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5 leading-[18.5px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="w-full h-full">
              <Image
                src="/homeBg4_1.svg"
                alt=""
                width={302}
                height={229}
              />              
            </div>
            <div>
              <div className="flex my-2 items-center">
                <Image
                  src="/avatar1.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                <Image
                  src="/h_line.svg"
                  alt=""
                  width={2}
                  height={12}
                  className="mx-3"
                />
                <Image
                  src="/calendar.svg"
                  alt=""
                  width={11}
                  height={12}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
              </div>
              <p className="text-[#010101] text-[21px] leading-[27px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] text-[16px] leading-[22px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="w-[167px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5 leading-[18.5px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="w-full h-full">
              <Image
                src="/homeBg4_1.svg"
                alt=""
                width={302}
                height={229}
              />              
            </div>
            <div>
              <div className="flex my-2 items-center">
                <Image
                  src="/avatar1.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                <Image
                  src="/h_line.svg"
                  alt=""
                  width={2}
                  height={12}
                  className="mx-3"
                />
                <Image
                  src="/calendar.svg"
                  alt=""
                  width={11}
                  height={12}
                />
                <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
              </div>
              <p className="text-[#010101] text-[21px] leading-[27px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] text-[16px] leading-[22px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="w-[167px] h-[51px] rounded-[25px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5 leading-[18.5px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Home;