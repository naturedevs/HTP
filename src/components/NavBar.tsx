'use client'
import { NavMenu } from "@/components/NavMenu";
import Link from "next/link";
import Image from "next/image";
import { ExitIcon } from "@radix-ui/react-icons";
import MobileNavBar from "@/components/MobileNavBar";
import { useRouter } from "next/navigation";
import {
  logout,
} from "@/store/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUser, selectIsAdmin, selectIsAgency, selectIsCart } from "@/store/features/auth/authSlice";
import { selectProducts, getProducts } from '@/store/features/products/productsSlice';
import { IProduct } from "@/store/features/products/productsAPI";
export function NavBar({backend}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAdministrator = useAppSelector(selectIsAdmin);
  const isAgency = useAppSelector(selectIsAgency);
  const isCart = useAppSelector(selectIsCart);
  const [items, setItems] = useState([]);
  const handleLogout = () => {
    router.push("/");
    dispatch(logout());
  }
  
  const user = useAppSelector(selectUser);
  useEffect(()=>{
    dispatch(getProducts({ type: "all", user: user.id }));
    const handleStorageChange = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (cartItems) {
        setItems(cartItems);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => { window.removeEventListener("storage", handleStorageChange);};
  },[])
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('cartItems')));
  }, []);
  return (
    <>
      <div className="top-0 sticky z-50 flex">
        <div className="py-2 flex flex-row w-full lg:justify-between md:justify-center sm:justify-between xs:justify-between sticky top-0 max-w-[1280px] mx-auto px-[15px]">
          <div className="flex h-[99px]">
            <Link href="/" className={backend?"sm:ml-0 ml-10 transition-all":""}>
              <Image
                src="/logo.svg"
                alt="Kiwi Farms - Premium Cannabis"
                width={342}
                height={30}
                className="md:max-lg:hidden mt-[34px]"
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
