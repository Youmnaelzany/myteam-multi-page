import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us | MyTeam - Get in Touch",
  description:
    "Have questions? We'd love to hear from you. Reach out to our team for inquiries, partnerships, or career opportunities.",
  keywords: [
    "contact us",
    "get in touch",
    "support",
    "inquiry",
    "careers",
    "partnerships",
  ],
  openGraph: {
    title: "Contact Us | MyTeam - Get in Touch",
    description:
      "Connect with our team. We're here to help with any questions about our services, partnerships, or career opportunities.",
    url: "https://myteam.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MyTeam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MyTeam - Get in Touch",
    description:
      "Have questions? Our team is ready to help. Reach out to us for any inquiries or partnership opportunities.",
    images: ["/twitter-contact.jpg"],
  },
};

export default function Contact() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Have questions or want to learn more about how we can help your
          business? Fill out the form below and our team will get back to you as
          soon as possible.
        </p>
      </div>

      <form className="space-y-6 rounded-lg bg-[#012F34] p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-[#79C8C7] bg-[#014E56] text-white placeholder-gray-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-[#79C8C7] bg-[#014E56] text-white placeholder-gray-400"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-white"
          >
            Subject
          </label>
          <Input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full border-[#79C8C7] bg-[#014E56] text-white placeholder-gray-400"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border-[#79C8C7] bg-[#014E56] text-white placeholder-gray-400"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="rounded-full bg-[#F67E7E] px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-[#F67E7E]/90"
          >
            Send Message
          </Button>
        </div>
      </form>

      <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div className="rounded-lg bg-[#012F34] p-6">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F67E7E]">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-bold text-white">Email Us</h3>
          <p className="text-gray-300">hello@myteam.com</p>
        </div>

        <div className="rounded-lg bg-[#012F34] p-6">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F67E7E]">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-bold text-white">Call Us</h3>
          <p className="text-gray-300">+1 (555) 123-4567</p>
        </div>

        <div className="rounded-lg bg-[#012F34] p-6">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F67E7E]">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-bold text-white">Visit Us</h3>
          <p className="text-gray-300">
            123 Business Ave, Suite 100
            <br />
            New York, NY 10001
          </p>
        </div>
      </div>
    </div>
  );
}
