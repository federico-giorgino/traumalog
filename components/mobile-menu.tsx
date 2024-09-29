import { Menu, Mountain } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { ThemeToggle } from "./theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MAIN_AREAS } from "@/lib/data";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}
export function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] flex-col flex justify-between"
      >
        <div className="flex flex-col space-y-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="size-8 text-primary" />
            <span className="font-bold text-4xl tracking-tighter">
              Traumalog
            </span>
          </Link>

          <div className="space-y-2">
            <Link href="/about" className="text-3xl font-bold hover:underline">
              About
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-3xl font-bold">
                  Areas
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1 mt-2">
                  {MAIN_AREAS.map((area, i) => (
                    <Link href={area.slug} className="text-lg cursor-pointer">
                      {area.title}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
