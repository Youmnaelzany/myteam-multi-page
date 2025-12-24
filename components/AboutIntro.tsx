import Image from "next/image";

import Wrapper from "./Wrapper";

const AboutIntro = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      aria-label="About MyTeam"
      className="relative flex flex-col items-center gap-4.5 overflow-hidden pt-20 pb-27 text-center md:py-28 lg:flex-row lg:items-end lg:justify-between lg:py-32 lg:text-left"
    >
      <h1 className="relative max-w-[248px] text-[2.5rem] leading-10 font-bold tracking-normal text-white md:max-w-[384px] md:text-[4rem] md:leading-14 lg:max-w-[600px] lg:text-[4rem] lg:leading-25">
        About
      </h1>
      {/* underline */}
      <span className="absolute top-8 left-7 hidden h-[4px] w-[50px] bg-[#F67E7E] md:top-14 md:left-10 lg:left-16 lg:flex"></span>
      <p className="text-[0.9375rem] leading-6.25 font-semibold tracking-normal text-white md:max-w-[457px] lg:max-w-[730px] lg:pr-16">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We&apos;ll bring those teams to you.
      </p>

      <Image
        src="/bg-pattern-about-1-mobile-nav-1.svg"
        alt=""
        width={200}
        height={200}
        className="absolute -right-25 -bottom-25 md:bottom-0"
        loading="lazy"
        priority={false}
        sizes="(max-width: 768px) 200px, 300px"
        aria-hidden="true"
      />
    </Wrapper>
  );
};
export default AboutIntro;
