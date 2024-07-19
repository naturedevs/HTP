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
	const dispatch = useAppDispatch();

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
						<Link href="/events" legacyBehavior passHref>
							<NavigationMenuLink>
								FIND EVENTS
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/test" legacyBehavior passHref>
							<NavigationMenuLink>
								TEST
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/media" legacyBehavior passHref>
							<NavigationMenuLink>
								MEDIA
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/service" legacyBehavior passHref>
							<NavigationMenuLink>
								OUR SERVICES
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</div>

				{!isLogin && <>
					<NavigationMenuItem>
						<Link href="/signup" legacyBehavior passHref>
							<button className="bg-black hover:bg-[#009688] text-gray-50 w-[136px] h-[42px] rounded-[21px] ml-4">
								SIGN UP
							</button>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/login" legacyBehavior passHref>
							<button className="bg-[#34A853] hover:bg-[#009688] text-gray-50 w-[136px] h-[42px] rounded-[24.5px] ml-2">
								LOGIN
							</button>
						</Link>
					</NavigationMenuItem>
				</>}

				{isLogin &&
					<NavigationMenuItem>
						<div className="flex h-16 items-center" onClick={handleLogout}>
							<div className="flex items-center justify-center text-xl py-2 px-4 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer">
								<span ><ExitIcon width={30} height={30}/></span>
							</div>
						</div>
					</NavigationMenuItem>
				}

			</NavigationMenuList>
		</NavigationMenu>
	);

}
