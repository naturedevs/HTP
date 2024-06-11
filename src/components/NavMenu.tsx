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
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="mt-[44px] ml-[861px]">
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/flower" legacyBehavior passHref>
            <NavigationMenuLink className="mt-[44px]">
              FIND EVENTS
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/edibles" legacyBehavior passHref>
            <NavigationMenuLink className="mt-[44px]">
              MEDIA
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/extracts" legacyBehavior passHref>
            <NavigationMenuLink className="mt-[44px]">
              Our Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
