"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "Find Events",
    href: "/find_events",
  },
  {
    title: "MEDIA",
    href: "/media",
  },
  {
    title: "OUR SERVICES",
    href: "/services",
  },
  {
    title: "SIGN UP",
    href: "/signup",
  },
  {
    title: "LOGIN",
    href: "/login",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="md:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 h-1/2">
              {components.map((component, i) => (
                <ListItem key={i} title={component.title} href={component.href}>
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, title, children, ...props }, ref) => {
  return (
    <li>
      <Link href={href}>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
