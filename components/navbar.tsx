"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MAIN_AREAS } from "@/lib/data";
import { Menu, Mountain, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NavigationItem } from "./navigation-item";
import { Icons } from "./ui/icons";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-2 container  mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl tracking-tighter">Traumalog</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <NavigationMenu className="[&_div.absolute]:-left-[13rem] [&_div.absolute]:top-12]">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Areas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                  {MAIN_AREAS.map((component) => (
                    <NavigationItem area={component} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Theme Button (Desktop) */}
      <Button className="hidden md:inline-flex">Theme</Button>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mountain className="h-6 w-6" />
                <span className="font-bold text-xl">Logo</span>
              </Link>
            </div>

            <Button
              className="mt-6 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
