import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <div className="left-0 bottom-0 w-full pt-10 pb-4 text-center relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="relative max-w-[1280px] m-auto bg2 h-[505px] rounded-[45px]">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-primaryColor opacity-60 rounded-[45px] px-10 grid grid-cols-5">
            <Image
              src="/footer_bg4.svg"
              alt=""
              width={403}
              height={505}
              className="col-span-2"
            />
            <div className="col-span-3 flex items-center content-center">
              <div className="text-left">
                <p className="text-[42px] leading-[63px] text-[#ffffff] font-bold">Sign Up For Newsletter</p>
                <p className="text-[15px] leading-[23px] text-[#ffffff] mt-3">
                  MUSIC CAN CHANGE LIVES. WHETHER YOU ARE HAVING A GOOD OR A BAD <br/>
                  DAY, THE POWER OF MUSIC CAN CHANGE YOUR MOOD.
                </p>
                <div className="relative flex items-center mt-6 bg-white rounded-[4px] h-[67px]">
                  <Image
                    src="/mail.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="col-span-2 ml-8"
                  />
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md bg-white px-5 py-2 text-sm outline-none"
                  />
                  <div className="bg-primaryColor w-[57px] h-[46px] content-center rounded-full overflow-hidden mr-4 ">
                    <Image
                      src="/send.svg"
                      alt=""
                      width={16}
                      height={15}
                      className="col-span-2 ml-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
      <div className="top-[253px] bg1 relative">
        <div className="max-w-[1280px] m-auto grid grid-cols-5 relative top-[326px]">
          <div className="col-span-2 grid grid-rows-2">
            <div className="h-[245px]">
              <Image
                src="/logo1.svg"
                alt=""
                width={342}
                height={30}
              />
              <p className="mt-7 text-[#ffffff] text-left text-[17px]">
                Technology focused provider of the best <br/>
                parties locally and around the world. <br/>
                Updated daily and sourced from verified<br/>
                venues and promoters. Let's get the party <br/>
                started!
              </p>
              <div className="flex mt-7 gap-3">
                <Image
                  src="/facebook.svg"
                  alt=""
                  width={23}
                  height={23}
                />
                <Image
                  src="/twitter.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <Image
                  src="/linkedin.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <Image
                  src="/instant.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className="col-span-3 grid grid-cols-3 space-x-16">
            <div className="ml-16">
              <p className="text-[19px] text-[#ffffff] text-left font-bold">Events by City</p>
              <p className="text-[17px] text-[#ffffff] text-left mt-4 leading-9">
                Atlanta, GA <br/>
                Chicago, IL <br/>
                Boston, MA <br/>
                Las Vegas, NV <br/>
                Los Angeles, CA <br/>
                Miami, FL <br/>
                New York, NY <br/>
                San Francisco, CA <br/>
                Washington, DC <br/>
              </p>
            </div>
            <div>
              <p className="text-[19px] text-[#ffffff] text-left font-bold">News Categories</p>
              <p className="text-[17px] text-[#34A853] text-left mt-4 leading-9">
                Trending Now
              </p>
              <p className="text-[17px] text-[#ffffff] text-left leading-9">
                Health & Fitness<br/>
                Music & Celebrities<br/>
                Fashion & Style<br/>
                Technology<br/>
                Product Reviews<br/>
                Travel & Events<br/>
              </p>
            </div>
            <div>
              <p className="text-[19px] text-[#ffffff] text-left font-bold">Resources</p>
              <p className="text-[17px] text-[#ffffff] text-left mt-4 leading-9">
                About Us<br/>
                Advertise Event<br/>
                Contact Us<br/>
                Help Center/FAQ<br/>
                Terms & Conditions<br/>
                Privacy Policy<br/>
              </p>
            </div>
          </div>

        </div>
        <div className="max-w-[1280px] m-auto relative flex justify-between mt-60">
          <p className="text-[#FFFFFF] text-[17px] leading-7">© 2024 House The Party. All Rights Reserved.</p>
          <div className="flex gap-7">
            <p className="text-[#FFFFFF] text-[17px] leading-7">Purchase Policy</p>
            <p className="text-[#FFFFFF] text-[17px] leading-7">Privacy Policy </p>
            <p className="text-[#FFFFFF] text-[17px] leading-7">Cookie Policy</p>
            <p className="text-[#FFFFFF] text-[17px] leading-7">Manage my cookies and ad choices</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
