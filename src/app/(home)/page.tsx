import "./home.css";
import Image from "next/image"
import { Input } from "@/components/ui/input";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div className="w-full">

      {/* Section 1 */}
      <div className="homeBg1 lg:content-center content-end pr-5">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50">
        </div>
        <div className="max-w-[1280px] m-auto grid grid-cols-5 items-center relative">
          <div className="lg:col-span-3 col-span-5 w-fit m-auto">   
            <Image
              src="/house_party.svg"
              alt=""
              width={308}
              height={12}
              className="mb-5"
            />
            <div className="lg:text-[90px] text-[45px] lg:leading-[101px] leading-[45px] md:text-[70px] md:leading-[70px] font-[700] text-white">
              <div className="flex">
                <p>FIND</p>
                <p className="text-primaryColor">&nbsp;MORE</p> 
              </div>
              <div className="flex">
                <p className="text-primaryColor">OF&nbsp;THE</p>
                <p>&nbsp;PARTY</p> 
              </div>
              NEAR YOU 
            </div>
          </div>
          <div className="relative lg:col-span-2 col-span-5 flex lg:justify-end justify-center pb-5">
            <form className="relative col-span-2 lg:w-[410px] w-full py-4 lg:py-12 px-8 rounded-[30px] lg:ml-8">
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 rounded-[30px]">
              </div>
              <div className="relative">
                <p className="md:text-[21px] text-[17px] text-[#ffffff] md:leading-[28px] leading-[20px] font-bold text-left">
                  Search parties happening in your city today, tomorrow, and this weekend. 
                </p>
                <Image
                  src="/underline.svg"
                  alt=""
                  width={42}
                  height={3}
                  className="lg:my-5 my-2"
                />
                <Input 
                  className="lg:w-[346px] w-full h-[45px] lg:h-[63px] rounded-[31.5px] bg-white px-7 md:text-[17px] text-[14px]"
                  placeholder="Enter City/Zipcode"
                />
                <div className="lg:w-[346px] w-full h-[45px] lg:h-[63px] rounded-[31.5px] border-[1px] border-[#FFFFFF] bg-white flex content-center mt-5 px-6">
                  <select value={'a'} className="md:text-[17px] text-[14px] leading-[18.5px] text-[#000000] outline-none w-full">
                    <option value="">Select...</option>
                    <option value="a">Within 1 mile</option>
                    <option value="b">Within 2 mile</option>
                    <option value="c">Within 3 mile</option>
                  </select>
                </div>
                <button className="lg:w-[346px] w-full h-[45px] lg:h-[63px] rounded-[31.5px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5">
                  LETS GO!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#F5F5F5] px-5">
        <div className="max-w-[1280px] m-auto py-[90px]">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
          <p className="md:text-[37px] text-[22px] md:leading-[49px] leading-[23px] font-bold text-[#000000] my-5">Parties Happening Around You Now</p>
          <p className="md:text-[17px] md:leading-[18.5px] text-[14px] leading-[16px] text-[#000000]">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
          <Grid container className="md:flex justify-between py-3 items-center hidden">
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Type of event</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Music</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Age</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <input 
                type="text"
                value={"Cover Charge"}
                className="text-[17px] leading-[17.5px] text-[#000000] outline-none w-[160px]"
              />
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Coming soon</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="flex items-center p-0">
              <button className="w-[264px] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF]">
                Search for keyword
              </button>
            </Grid>
          </Grid>
          <div className="md:hidden flex bg-white rounded-[3px] p-2 justify-between items-center mt-6">
            <p className="text-black text-[17px] leading-[18.5px] font-[400] ml-3">Filter by:</p>
            <div className="flex content-center bg-primaryColor w-[36px] h-[36px] justify-center rounded-[3px]">
              <Image
                src="/filter.svg"
                alt=""
                width={18.7}
                height={17}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
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
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
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
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
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
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
                BUY TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 3 */}
      <div className="max-w-[888px] m-auto mmd:py-[90px] py-10 px-5">
        <div className="flex justify-center mb-5">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
        </div>
        <div className="flex justify-center my-5">
          <p className="md:text-[37px] text-[22px] text-[#000000] md:leading-[49px] leading-[27px] font-bold">Host Your Event With House The Party</p>
        </div>

        <div className="flex justify-center my-10 rounded-[6px]">
          <div className="p-3 grid grid-cols-2 drop-shadow-lg rounded-[6px] border-[1px] border-[#F3F3F3]">
            <div className="bg-primaryColor flex items-center rounded-[6px] justify-center md:h-[58px] w-[173px] h-[45px] md:w-[305px]">
              <p className="text-[16px] text-[#ffffff] leading-[18px] font-bold">List Your Event </p>
            </div>
            <div className="bg-[#F3F3F3] flex items-center rounded-[6px] justify-center md:h-[58px] w-[173px] h-[45px] md:w-[305px]">
              <p className="text-[16px] text-[#212020] leading-[18px] font-bold">List Your Value </p>
            </div>
          </div>
        </div>

        <div className="mmd:grid mmd:grid-cols-2 mmd:grid-rows-1">
          <div className="flex mmd:justify-start justify-center">
            <Image
              src="/homeBg2_1.svg"
              alt=""
              width={416.5}
              height={419.92}
              className="mmd:w-[416px] mmd:h-[420px] w-[245.9px] h-[247.92px]"
            />
          </div>
          <div className="flex mmd:justify-end justify-center items-center mmd:mt-0 mt-5">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold">STEP 1</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="mmd:grid mmd:grid-cols-2 mmd:grid-rows-1 mmd:mt-0 mt-5">
          <div className="mmd:flex mmd:justify-start justify-center items-center hidden">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold">STEP 2</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
          <div className="flex mmd:justify-end justify-center">
            <Image
              src="/homeBg2_2.svg"
              alt=""
              width={416.5}
              height={419.92}
              className="mmd:w-[416px] mmd:h-[420px] w-[245.9px] h-[247.92px]"
            />
          </div>
          <div className="flex mmd:justify-start justify-center items-center mmd:hidden mmd:mt-0 mt-5">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold">STEP 2</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="mmd:grid mmd:grid-cols-2 mmd:grid-rows-1 mmd:mt-0 mt-5">
          <div className="flex mmd:justify-start justify-center">
            <Image
              src="/homeBg2_3.svg"
              alt=""
              width={416.5}
              height={419.92}
              className="mmd:w-[416px] mmd:h-[420px] w-[245.9px] h-[247.92px]"
            />
          </div>
          <div className="flex mmd:justify-end justify-center items-center">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold mmd:mt-0 mt-5">STEP 3</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mmd:mt-7 mt-0">
          <button className="w-[254px] mmd:h-[60px] h-[45px] rounded-[30px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mt-5 leading-[19px]">
            GET STARTED
          </button>
        </div>

      </div>

      {/* Section 4 */}
      <div className="bg-[#F5F5F5] px-5">
        <div className="max-w-[1280px] m-auto py-[90px]">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
          <p className="lg:text-[37px] md:text-[37px] text-[30px] lg:leading-[49px] md:leading-[49px] leading-[30px] font-bold text-[#000000] my-5">Upcoming Global Events</p>
          <p className="text-[17px] leading-[18.5px] text-[#000000]">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
          <Grid container className="md:flex justify-between py-3 items-center hidden">
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Type of event</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Music</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Age</option>
                <option value="b">30</option>
                <option value="c">40</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <input 
                type="text"
                value={"Cover Charge"}
                className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-[160px]"
              />
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select value={'a'} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Select...</option>
                <option value="a">Distance</option>
                <option value="b">Coming soon</option>
                <option value="c">Coming soon</option>
              </select>
            </Grid>
            <Grid item xs={4} md={4} xl={2} sx={{ display: "flex" }} className="flex items-center p-0">
              <button className="w-[264px] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF]">
                Search for keyword
              </button>
            </Grid>
          </Grid>
          <div className="md:hidden flex bg-white rounded-[3px] p-2 justify-between items-center mt-6">
            <p className="text-black text-[17px] leading-[18.5px] font-[400] ml-3">Filter by:</p>
            <div className="flex content-center bg-primaryColor w-[36px] h-[36px] justify-center rounded-[3px]">
              <Image
                src="/filter.svg"
                alt=""
                width={18.7}
                height={17}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
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
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
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
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
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
          <div className="grid lg:grid-cols-2 md:grid-cols-3 py-7">
            <div className="md:flex md:justify-between md:space-x-3 md:col-span-2 lg:col-span-1">
              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">JUN</p>
                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">07</p>
              </div>
              <div className="my-5 md:my-0">
                <div className="flex mb-2">
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">Wed - 7:00 PM</p>
                  <Image
                    src="/info.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                    Empower Federal Credit Union Amphitheater <br/>
                    at Lakeview
                  </p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Lainey Wilson: Country's Cool Again Tour</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">Syracuse, NY</p>
                  <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">BankPlus Amphitheater at Snowden Grove, Southaven, MS</p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center col-span-1">
              <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
                BUY TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 5 */}
      <div className=" max-w-[1280px] m-auto py-[90px] px-5">
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
        <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-5">
          <div>
            <div>
              <Image
                src="/homeBg4_1.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/homeBg4_2.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/homeBg4_3.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/homeBg4_4.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
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