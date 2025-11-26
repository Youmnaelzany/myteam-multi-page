"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MEET_DIRECTORS } from "@/lib/constants";

import Wrapper from "./Wrapper";
import { Button } from "./ui/button";

const MeetTheDirectors = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };
  return (
    <Wrapper
      className="relative flex flex-col items-center justify-center gap-10 overflow-hidden bg-[#004047] py-22 md:gap-12 md:py-27 lg:gap-16 lg:py-35"
      as="section"
      role="region"
    >
      <Image
        src="/bg-pattern-about-2-contact-1.svg"
        alt="Build Manage"
        width={200}
        height={200}
        className="absolute -top-25 -left-30 md:top-0 md:-left-25"
        loading="lazy"
      />
      <h2 className="text-[2rem] leading-8 font-bold tracking-normal text-white lg:text-5xl lg:leading-12">
        Meet the directors
      </h2>
      <div className="grid grid-cols-1 justify-between gap-x-3 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
        {MEET_DIRECTORS.map((directors) => (
          <div
            className={`relative flex w-[327px] flex-col items-center justify-center gap-4 bg-[#012F34] p-8 text-center transition-all duration-300 md:w-[281] lg:h-[253px] lg:w-[350px] ${flippedCards.includes(directors.id) ? "h-[253px]" : "h-full"}`}
          >
            {!flippedCards.includes(directors.id) ? (
              <>
                <Image
                  src={directors.avatar}
                  alt={directors.name}
                  width={96}
                  height={96}
                  className="rounded-full border border-[#C4FFFE]"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-base leading-7 font-bold tracking-normal text-[#79C8C7]">
                    {directors.name}
                  </h3>
                  <h4 className="text-[0.9375rem] leading-6.25 font-medium tracking-normal text-white">
                    {directors.title}
                  </h4>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <h3 className="text-base leading-7 font-bold tracking-normal text-[#79C8C7]">
                    {directors.name}
                  </h3>
                  <p className="text-[0.9375rem] leading-6.25 font-medium tracking-normal text-white">
                    {directors.description}
                  </p>
                </div>
                <ul className="flex items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger>
                      <li className="">
                        <Link href="/" className="cursor-pointer">
                          <FaXTwitter className="size-6 text-white transition duration-700 ease-in-out hover:text-[#F67E7E]" />
                        </Link>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <li className="cursor-pointer">
                        <Link href="/" className="cursor-pointer">
                          <FaLinkedin className="size-6 text-white transition duration-700 ease-in-out hover:text-[#F67E7E]" />
                        </Link>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </ul>
              </div>
            )}

            <Button
              type="button"
              variant={"default"}
              size={"icon-lg"}
              className={`absolute -bottom-4 cursor-pointer rounded-full transition-transform duration-300 hover:rotate-180 hover:bg-[#F67E7E] ${
                flippedCards.includes(directors.id)
                  ? "bg-[#79C8C7]"
                  : "bg-[#F67E7E]"
              }`}
              onClick={() => handleFlip(directors.id)}
            >
              {flippedCards.includes(directors.id) ? "x" : "+"}
            </Button>
          </div>
        ))}
      </div>

      <Image
        src="/bg-pattern-home-4-about-3.svg"
        alt="Build Manage"
        width={147}
        height={100}
        className="absolute right-0 bottom-0"
        loading="lazy"
      />
    </Wrapper>
  );
};
export default MeetTheDirectors;
