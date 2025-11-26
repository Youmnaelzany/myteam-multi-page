import Image from "next/image";
import Link from "next/link";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

import PrimaryBtn from "./PrimaryBtn";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 cursor-pointer text-white" />
        </SheetTrigger>

        <SheetContent className="bg-[#2C6269] px-7 py-14">
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
            </SheetTitle>
          </SheetHeader>

          {/* Replace SheetDescription <p> with a div */}
          <div className="space-y-9">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-lg leading-7 font-semibold tracking-normal text-white transition duration-700 ease-in-out hover:text-[#F67E7E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <PrimaryBtn className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#002529]">
              contact us
            </PrimaryBtn>

            <Image
              src="/bg-pattern-about-1-mobile-nav-1.svg"
              alt="Circle Pattern"
              width={200}
              height={200}
              className="absolute -right-[31%] bottom-0"
              loading="lazy"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
