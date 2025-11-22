import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const PrimaryBtn = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      asChild
      type="button"
      className={cn(
        "h-[48px] w-[151px] cursor-pointer rounded-full text-lg leading-7 font-semibold tracking-normal transition duration-700 ease-in-out",
        className
      )}
    >
      <Link href="/contact">{children}</Link>
    </Button>
  );
};
export default PrimaryBtn;
