import AboutSection2 from "@/components/about/about-section2";
import AboutSection3 from "@/components/about/about-section3";
import NewAboutHero from "@/components/about/new-about-hero";
import OurSocial from "@/components/about/our-social";
import BigIdeas from "@/components/common/big-ideas";
import ContactForm from "@/components/common/contact-form";
import FeaturedBlogs from "@/components/common/featured-blogs";
import SolutionCarousel from "@/components/common/solution-carousel";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Xntric – Creative Digital Marketing Solutions",
  description: "Learn about Xntric, your trusted partner in marketing, branding, and technology, delivering creative, data-driven solutions to help your business thrive online.",
};
function About() {
  return (
    <div className="max-w-screen">
      <NewAboutHero  />
      <AboutSection2 />
      <AboutSection3 />
      <SolutionCarousel isPadding={true} />
      <FeaturedBlogs />
      <OurSocial />
      <BigIdeas />
      <ContactForm/>
    </div>
  );
}

export default About;
