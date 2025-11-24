import React from "react";

import BestTalent from "@/components/BestTalent";
import BuildManage from "@/components/BuildManage";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <React.Fragment>
      <BestTalent />
      <BuildManage />
      <SuccessStories />
    </React.Fragment>
  );
}
