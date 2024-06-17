import "./page.css"
import Image from "next/image";
import { Input } from "../../../components/ui/input";

function Home() {
    return (
        <div>
            <div className="relative bg-gradient-to-r from-primaryColor via-50% via-[#77C574] to-primaryColor md:h-[409px] h-[274px]">
                <div className="banner opacity-30 absolute top-0 left-0 right-0 bottom-0 md:h-[409px] h-[274px]"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex max-w-[1280px] m-auto justify-between px-4">
                    <div className="content-center space-y-5">
                        <p className="font-[800] lg:text-[80px] lg:leading-[80px] md:text-[60px] md:leading-[60px] mmd:text-[45px] mmd:leading-[45px] text-[36px] leading-[36px] text-white">LIST YOUR EVENT</p>
                        <div className="font-[400] text-[18px] leading-[18px] text-white ml-1 md:flex hidden">
                            <p>HOME&nbsp;</p>
                            <Image
                                src="/arrow.svg"
                                alt=""
                                width={10}
                                height={10}
                            />
                            <p>&nbsp;LIST YOUR EVENT</p>
                        </div>
                    </div>
                    <Image
                        src="/guitar.svg"
                        alt=""
                        width={327}
                        height={409}
                        className="md:w-[327px] md:h-[409px] w-[219px] h-[274px]"
                    />
                </div>
            </div>
            <div className="bg-[#f3f3f6] py-20">
                <div className="max-w-[950px] lg:m-auto mx-4 bg-white pt-10 px-5 rounded-[6px]">
                    <form className="grid grid-rows-2 gap-3">
                        <div>
                            <div>
                                <p className="text-[#000000] font-[700] mmd:text-[30px] text-[21px] mb-1">List your event</p>
                                <p className="text-[#000000] font-[400] mmd:text-[17px] text-[14px] mmd:mb-6 mb-3">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.</p>
                            </div>
                            <div className="mmd:grid grid-cols-2 mmd:space-y-0 gap-3 space-y-3">
                                <div className="grid grid-rows-5 gap-3">
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Event name"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Event time Start"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Event Type"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="DJ Name"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Dress Code"
                                    />
                                </div>
                                <div className="grid grid-rows-5 gap-3">
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Event date"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Event time End"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Music Type"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Venue Name"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                    placeholder="Venue type"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full space-y-3">
                            <Input 
                                maxLength={30}
                                className="mmd:h-[93px] j-[93px]"
                                placeholder="Venue address"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <Input 
                                    maxLength={30}
                                    placeholder="Age restrictions"
                                    className="mmd:h-[64px] h-[45px]"
                                />
                                <Input 
                                    maxLength={30}
                                    placeholder="Cover Charge"
                                    className="mmd:h-[64px] h-[45px]"
                                />
                            </div>
                            <div className="flex space-x-3">
                                <input
                                    type="checkbox"
                                    className="mmd:w-[26px] w-[20px] mmd:h-[26px] h-[20px] mt-2"
                                />
                                <p className="mmd:text-[17px] text-[14px] text-[#3D3D3D] font-[400] mt-2">Do you want to sell Tickets?</p>
                            </div>
                            <div className="flex space-x-3">
                                <input
                                    type="checkbox"
                                    className="mmd:w-[26px] w-[20px] mmd:h-[26px] h-[20px] mb-2"
                                />
                                <p className="mmd:text-[17px] text-[14px] text-[#3D3D3D] font-[400] mb-2">Will there be bottle Services?</p>
                            </div>
                            <div className="flex mmd:h-[64px] h-[45px] w-full rounded-[4px] border border-input border-[#929496] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">       
                                <input 
                                    maxLength={300}
                                    placeholder="Upload event flyer"
                                    className="outline-none mmd:text-[17px] text-[14px] text-black w-full"
                                />
                                <Image
                                    src="/link.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex mmd:flex-row flex-col justify-center mmd:space-x-3 mmd:my-10 my-0">
                                <button className="mmd:w-[206px] mmd:h-[64px] h-[45px] rounded-[4px] bg-black mmd:text-[15px] text-[14px] text-[#FFFFFF] mmd:mt-5 mt-2">
                                    SAVE FOR LATER
                                </button>
                                <button className="mmd:w-[206px] mmd:h-[64px] h-[45px] rounded-[4px] bg-primaryColor mmd:text-[15px] text-[14px] text-[#FFFFFF] mt-5 mb-10">
                                    NEXT
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;