import type { Metadata } from "next";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Client Reviews — 4.9★ Rating Across 50+ Projects",
  description:
    "Read client reviews and testimonials for Rahnor. 4.9-star average rating, Top Rated on Upwork with 100% Job Success, Level 2 on Fiverr. Trusted by clients in the US, UK, Canada, Germany, Australia, and more.",
  keywords: [
    "Rahnor reviews",
    "web developer reviews",
    "AI developer reviews",
    "Upwork top rated developer",
    "Fiverr developer reviews",
    "freelance developer testimonials",
    "client testimonials software development",
  ],
  alternates: { canonical: "https://rahnor.com/reviews" },
  openGraph: {
    title: "Client Reviews | Rahnor",
    description:
      "4.9★ average rating across 50+ projects. Top Rated on Upwork, Level 2 on Fiverr. Read what clients say.",
    url: "https://rahnor.com/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <div className="pt-28" />
      <Reviews />
      <Contact />
    </>
  );
}
