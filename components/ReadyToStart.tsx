import Image from "next/image";

import PrimaryBtn from "./PrimaryBtn";
import Wrapper from "./Wrapper";

const ReadyToStart = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      className="relative flex flex-col items-center justify-center gap-6 overflow-hidden bg-[#F67E7E] py-16 md:flex-row md:justify-between md:px-18 md:py-20 lg:px-37"
    >
      <h2 className="w-[327px] text-center text-[2rem] leading-8 font-bold tracking-normal text-[#012F34] md:w-auto lg:text-left">
        Ready to get started?
      </h2>
      <PrimaryBtn className="border-2 border-[#012F34] bg-transparent text-[012F34] hover:bg-[#012F34] hover:text-white">
        contact us
      </PrimaryBtn>
      <Image
        src="/bg-pattern-home-6-about-5.svg"
        alt="Circle Pattern"
        width={200}
        height={144}
        className="absolute -bottom-5 left-0"
      />
    </Wrapper>
  );
};
export default ReadyToStart;
