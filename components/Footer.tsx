import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

import { NAV_LINKS } from "@/lib/constants";

import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper
      as="footer"
      role="contentinfo"
      className="md:ite flex w-full flex-col items-center justify-center gap-10 bg-[#002529] py-14 md:justify-between md:gap-8 lg:flex-row"
    >
      <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center justify-between gap-6 md:items-start md:justify-between lg:gap-8.25">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image src="/logo.svg" alt="Logo" width={160} height={40} />
          </Link>
          {/* Navigation */}
          <ul className="flex items-center justify-between gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="cursor-pointer text-[0.9375rem] leading-6.25 font-semibold tracking-normal text-white transition duration-700 ease-in-out hover:text-[#F67E7E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Address */}
        <div className="text-center text-[0.9375rem] leading-6.25 font-semibold text-white/80 md:text-right lg:text-left">
          <p className="">987 Hillcrest Lane</p>
          <p className="">Irvine, CA</p>
          <p className="">California 92714</p>
          <p className="">Call Us : 949-833-7432</p>
        </div>
      </div>
      {/* Social Media Links & Copyright */}
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:justify-between lg:flex-col lg:items-end lg:gap-11.5">
        {/* Social Media Links */}
        <ul className="flex items-center gap-6">
          <li className="">
            <Link href="/" className="cursor-pointer">
              <FaSquareFacebook className="size-7 text-white transition duration-700 ease-in-out hover:text-[#F67E7E]" />
            </Link>
          </li>
          <li className="">
            <Link href="/" className="cursor-pointer">
              <FaInstagram className="size-7 text-white transition duration-700 ease-in-out hover:text-[#F67E7E]" />
            </Link>
          </li>
          <li className="">
            <Link href="/" className="cursor-pointer">
              <FaXTwitter className="size-7 text-white transition duration-700 ease-in-out hover:text-[#F67E7E]" />
            </Link>
          </li>
        </ul>
        {/* Copyright */}
        <p className="text-[0.9375rem] leading-6.25 font-semibold text-white/80">
          © {new Date().getFullYear()} MyTeam. All rights reserved.
        </p>
      </div>
    </Wrapper>
  );
};
export default Footer;
