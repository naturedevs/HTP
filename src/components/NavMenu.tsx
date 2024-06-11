"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ExitIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import {
  logout,
  selectIslogin,
  selectIsVisitor,
  selectIsNothing
} from "@/store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "./ui/button";

export function NavMenu() {
  const router = useRouter();
  const isLogin = useAppSelector(selectIslogin); 
  const isNothing = useAppSelector(selectIsNothing);
  const isVisitor = useAppSelector(selectIsVisitor);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    if(isLogin) {
      router.push('/dashboard');
    }
    router.push("/login");
  }

  const handleLogout = () => {
    router.push("/");
    dispatch(logout());
  }

  return (
    <NavigationMenu className="hidden md:flex w-full">
      <NavigationMenuList className="w-full">
        <div className="space-x-6 flex">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/flower" legacyBehavior passHref>
              <NavigationMenuLink>
                FIND EVENTS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/edibles" legacyBehavior passHref>
              <NavigationMenuLink>
                MEDIA
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/extracts" legacyBehavior passHref>
              <NavigationMenuLink>
                Our Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
  
        <NavigationMenuItem>
          <Link href="/extracts" legacyBehavior passHref>
            <button className="bg-black text-gray-50 w-[136px] h-[42px] rounded-[21px] ml-4">
              SIGN UP
            </button>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/extracts" legacyBehavior passHref>
            <button className="bg-[#34A853] text-gray-50 w-[136px] h-[42px] rounded-[24.5px] ml-2">
              LOGIN
            </button>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
