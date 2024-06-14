import "./page.css"
import Image from "next/image";
import { Input } from "../../../components/ui/input";

function Home() {
    return (
        <div>
            <div className="banner">
            </div>
            <div className="bg-[#f3f3f6] py-20">
                <div className="max-w-[950px] m-auto bg-white pt-10 px-5 rounded-[6px]">
                    <form className="grid grid-rows-2 gap-2">
                        <div>
                            <div>
                                <p className="text-[#000000] font-[700] text-[30px] mb-1">List your event</p>
                                <p className="text-[#000000] font-[400] text-[17px] mb-6">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid grid-rows-5 gap-3">
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Event name"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Event time Start"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Event Type"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="DJ Name"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Dress Code"
                                    />
                                </div>
                                <div className="grid grid-rows-5 gap-3">
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Event date"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Event time End"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Music Type"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Venue Name"
                                    />
                                    <Input
                                    maxLength={40}
                                    className="bg-white mt-0"
                                    placeholder="Venue type"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full space-y-3">
                            <Input 
                                maxLength={30}
                                className="h-[93px]"
                                placeholder="Venue address"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <Input 
                                    maxLength={30}
                                    placeholder="Age restrictions"
                                />
                                <Input 
                                    maxLength={30}
                                    placeholder="Cover Charge"
                                />
                            </div>
                            <div className="flex space-x-3">
                                <input
                                    type="checkbox"
                                    className="w-[26px] h-[26px] mt-2"
                                />
                                <p className="text-[17px] text-[#3D3D3D] font-[400] mt-2">Do you want to sell Tickets?</p>
                            </div>
                            <div className="flex space-x-3">
                                <input
                                    type="checkbox"
                                    className="w-[26px] h-[26px] mb-2"
                                />
                                <p className="text-[17px] text-[#3D3D3D] font-[400] mb-2">Will there be bottle Services?</p>
                            </div>
                            <div className="flex h-[64px] w-full rounded-[4px] border border-input border-[#929496] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">       
                                <input 
                                    maxLength={300}
                                    placeholder="Upload event flyer"
                                    className="outline-none text-[17px] text-black w-full"
                                />
                                <Image
                                    src="/link.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex justify-center space-x-3 my-10">
                                <button className="w-[206px] h-[64px] rounded-[4px] bg-black text-[15px] text-[#FFFFFF] mt-5">
                                    SAVE FOR LATER
                                </button>
                                <button className="w-[206px] h-[64px] rounded-[4px] bg-primaryColor text-[15px] text-[#FFFFFF] mt-5 mb-10">
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