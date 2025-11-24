import Image from "next/image";

import { SUCCESS_STORIES } from "@/lib/constants";

import Wrapper from "./Wrapper";

const SuccessStories = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      className="relative flex flex-col items-center justify-center gap-16 bg-[#004047] pt-35 pb-41 lg:py-35"
    >
      <Image
        src="/bg-pattern-home-4-about-3.svg"
        alt="Build Manage"
        width={147}
        height={100}
        className="absolute top-0 left-0"
      />
      <h2 className="max-w-[932px] text-center text-[2rem] leading-8 font-bold tracking-normal text-white lg:text-5xl lg:leading-12">
        Delivering real results for top companies. Some of our{" "}
        <span className="text-[#79C8C7]">success stories</span>.
      </h2>
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:justify-between lg:gap-0">
        {SUCCESS_STORIES.map((story) => (
          <div
            key={story.id}
            className="relative z-50 flex flex-col items-center justify-center gap-4 text-center"
          >
            <p className="z-50 text-[0.9375rem] leading-6.25 font-semibold tracking-normal text-white">
              {story.description}
            </p>
            <div className="text-center">
              <h3 className="text-lg leading-7 font-bold tracking-normal text-[#79C8C7]">
                {story.name}
              </h3>
              <p className="max-w-[573px] text-[0.8125rem] leading-4.5 font-medium tracking-normal text-white">
                {story.title}
              </p>
            </div>
            <Image
              src={story.icon}
              alt={story.name}
              width={62}
              height={62}
              className="rounded-full border border-[#C4FFFE]"
            />
            <Image
              src="/icon-quotes.svg"
              alt="Quotes"
              width={67}
              height={52}
              className="absolute -top-8 right-[44%] z-10"
            />
          </div>
        ))}
      </div>
      <Image
        src="/bg-pattern-home-5.svg"
        alt="Build Manage"
        width={200}
        height={100}
        className="absolute right-0 bottom-0"
      />
    </Wrapper>
  );
};
export default SuccessStories;
