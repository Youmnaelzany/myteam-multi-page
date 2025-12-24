import { Metadata } from "next";
import React from "react";

import AboutIntro from "@/components/AboutIntro";
import MeetTheDirectors from "@/components/MeetTheDirectors";
import OurClients from "@/components/OurClients";

export const metadata: Metadata = {
  title: "About Us | MyTeam - Building Exceptional Teams",
  description:
    "Learn about MyTeam and our mission to connect businesses with top-tier talent. Meet our leadership team and see what makes us different.",
  keywords: [
    "about us",
    "our team",
    "company history",
    "leadership",
    "talent acquisition",
  ],
  openGraph: {
    title: "About Us | MyTeam - Building Exceptional Teams",
    description:
      "Discover the people and values behind MyTeam. Learn how we're transforming the way companies build their dream teams.",
    url: "https://myteam.com/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "MyTeam - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MyTeam - Building Exceptional Teams",
    description:
      "Meet the team behind MyTeam and learn about our mission to connect businesses with top talent.",
    images: ["/twitter-about.jpg"],
  },
};

export default function About() {
  return (
    <React.Fragment>
      <AboutIntro />
      <MeetTheDirectors />
      <OurClients />
    </React.Fragment>
  );
}
