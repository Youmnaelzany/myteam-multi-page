import React from "react";

import AboutIntro from "@/components/AboutIntro";
import MeetTheDirectors from "@/components/MeetTheDirectors";
import OurClients from "@/components/OurClients";

export default function About() {
  return (
    <React.Fragment>
      <AboutIntro />
      <MeetTheDirectors />
      <OurClients />
    </React.Fragment>
  );
}
