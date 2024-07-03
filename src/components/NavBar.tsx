'use client'
import { NavMenu } from "@/components/NavMenu";
import Link from "next/link";
import Image from "next/image";
import MobileNavBar from "@/components/MobileNavBar";
import {  useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/features/auth/authSlice";
export function NavBar({backend}) {
  
  const user = useAppSelector(selectUser);

  return (
    <>
      <div className="top-0 sticky z-50 flex bg-white">
        <div className="flex flex-row w-full lg:justify-between md:justify-center sm:justify-between xs:justify-between sticky top-0 max-w-[1280px] mx-auto px-[15px]">
          <div className="flex h-[99px]">
            <Link href="/" className="items-center content-center">
              <Image
                src="/logo.svg"
                alt="Kiwi Farms - Premium Cannabis"
                width={325}
                height={30}
                className="md:max-lg:hidden"
              />
            </Link>
          </div>
          <div className="flex">
            <div className="flex flex-row gap-5 items-center w-full">
                <NavMenu />
                <MobileNavBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
