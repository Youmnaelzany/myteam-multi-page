import Image from "next/image";

import Wrapper from "./Wrapper";

const OurClients = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      className="relative flex flex-col items-center justify-center gap-16 overflow-hidden bg-[#012F34] py-20 md:gap-12 md:py-28 lg:gap-16 lg:py-35"
    >
      <Image
        src="/bg-pattern-about-4.svg"
        alt="the verge"
        width={200}
        height={200}
        className="absolute -top-25 -left-30 md:-top-25 lg:top-0 lg:left-0"
        loading="lazy"
      />
      <h2 className="text-center text-[2rem] leading-8 font-bold tracking-normal text-white lg:text-5xl lg:leading-12">
        Some of our clients
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:gap-10">
        <Image
          src="/logo-the-verge.png"
          alt="the verge"
          width={146.56}
          height={24.19}
          className="md:h-[17px] md:w-[103px] lg:h-[28px] lg:w-[165px]"
          loading="lazy"
        />
        <Image
          src="/logo-jakarta-post.png"
          alt="the verge"
          width={162.21}
          height={19.92}
          className="md:h-[14px] md:w-[114px] lg:h-[23px] lg:w-[184px]"
          loading="lazy"
        />
        <Image
          src="/logo-the-guardian.png"
          alt="the verge"
          width={159.37}
          height={24.19}
          className="md:h-[17px] md:w-[112px] lg:h-[28px] lg:w-[180px]"
          loading="lazy"
        />
        <Image
          src="/logo-tech-radar.png"
          alt="the verge"
          width={146.56}
          height={24.19}
          className="md:h-[17px] md:w-[103px] lg:h-[28px] lg:w-[165px]"
          loading="lazy"
        />
        <Image
          src="/logo-gadgets-now.png"
          alt="the verge"
          width={86.8}
          height={39.84}
          className="md:h-[28px] md:w-[61px] lg:h-[45px] lg:w-[98px]"
          loading="lazy"
        />
      </div>
    </Wrapper>
  );
};
export default OurClients;
