import React from "react";

import BuildManage from "@/components/BuildManage";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <React.Fragment>
      <BuildManage />
      <SuccessStories />
    </React.Fragment>
  );
}
