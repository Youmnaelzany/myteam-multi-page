import Image from "next/image";

import { BUILD_MANAGE } from "@/lib/constants";

import Wrapper from "./Wrapper";

const BuildManage = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      aria-label="build manage"
      className="relative flex flex-col justify-between gap-14 overflow-hidden bg-[#012F34] py-16 md:gap-16 md:py-25 lg:flex-row"
    >
      <Image
        src="/bg-pattern-home-3.svg"
        alt="Build Manage"
        width={200}
        height={244}
        className="absolute top-0 -right-25 lg:top-auto lg:bottom-0"
      />
      {/* Title */}
      <h2 className="relative max-w-[240px] text-[2rem] leading-8 font-bold tracking-normal text-white md:max-w-[445px] lg:text-5xl lg:leading-12">
        {" "}
        Build & manage distributed teams like no one else.
      </h2>
      {/* underline */}
      <span className="absolute top-8 left-7 h-[4px] w-[50px] bg-[#F67E7E] md:top-14 md:left-10 lg:left-16"></span>
      {/* Text content */}
      <div className="flex max-w-[573px] flex-col gap-12 md:gap-8 lg:max-w-[540px] lg:pr-16">
        {BUILD_MANAGE.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-6"
          >
            <Image src={item.icon} alt={item.title} width={72} height={72} />
            <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:justify-start md:gap-4 md:text-left">
              <h3 className="text-lg leading-7 font-bold tracking-normal text-[#F67E7E]">
                {item.title}
              </h3>
              <p className="text-[0.9375rem] leading-6.25 font-semibold tracking-normal text-white/80">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default BuildManage;
