import Image from "next/image";

import Wrapper from "./Wrapper";

const BestTalent = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      aria-label="Best Talent"
      className="relative flex flex-col items-center gap-4.5 overflow-hidden pt-20 pb-48 text-center md:pt-28 lg:flex-row lg:items-end lg:justify-between lg:pt-32 lg:text-left"
    >
      <Image
        src="/bg-pattern-home-1.svg"
        alt="Best Talent"
        width={200}
        height={200}
        className="absolute top-29 -left-25 hidden lg:flex"
        loading="lazy"
      />
      {/* underline */}

      <h1 className="relative max-w-[248px] text-[2.5rem] leading-10 font-bold tracking-normal text-white md:max-w-[384px] md:text-[4rem] md:leading-14 lg:max-w-[600px] lg:pl-16 lg:text-[6.25rem] lg:leading-25">
        Find the best <span className="text-[#F67E7E]">talent</span>
      </h1>
      <span className="absolute top-8 left-7 hidden h-[4px] w-[50px] bg-[#79C8C7] md:top-14 md:left-10 lg:left-32 lg:flex"></span>
      <p className="text-[0.9375rem] leading-6.25 font-semibold tracking-normal text-white md:max-w-[457px] lg:max-w-[445px]">
        Finding the right people and building high performing teams can be hard.
        Most companies aren&apos;t tapping into the abundance of global talent.
        We&apos;re about to change that.
      </p>

      <Image
        src="/bg-pattern-home-2.svg"
        alt="Best Talent"
        width={358}
        height={100}
        className="absolute right-0 bottom-0"
        loading="lazy"
      />
    </Wrapper>
  );
};

export default BestTalent;
