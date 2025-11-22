"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/lib/constants";

import PrimaryBtn from "./PrimaryBtn";
import Wrapper from "./Wrapper";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  return (
    <Wrapper
      as="header"
      role="banner"
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between py-8 transition-all duration-300 ${
        scrolled
          ? "bg-opacity-90 border-opacity-10 border-b border-white bg-[#014E56] backdrop-blur-sm"
          : ""
      }`}
    >
      <div className="flex items-center justify-between gap-12 lg:gap-20">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={160} height={40} />
        </Link>
        <ul className="hidden items-center justify-between gap-10 md:flex">
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
      </div>
      <PrimaryBtn className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#002529]">
        contact us
      </PrimaryBtn>
    </Wrapper>
  );
};
export default Header;
