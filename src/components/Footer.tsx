import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <div className="left-0 bottom-0 w-full pt-10 pb-4 text-center h-[1062px]">
      <div className="top-[253px] bg1 absolute">
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
        <div className="max-w-[1280px] m-auto relative flex justify-between mt-96">
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
