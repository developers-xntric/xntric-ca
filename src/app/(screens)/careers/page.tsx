// import OurSocial from "@/components/about/our-social";
import BigIdeas from "@/components/common/big-ideas";
import BlogHeader from "@/components/blog/blog-header";
import Atmosphere from "@/components/careers/atmosphere";
import OurMission from "@/components/careers/our-mission";
import People from "@/components/careers/people";
import ContactForm from "@/components/common/contact-form";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers at Xntric – Join Our Creative Team",
  description: "Join the creative, dynamic Xntric team and grow your career in digital marketing, branding, design, and technology with exciting opportunities.",
};
const CareersPage = () => {
  return (
    <main className="overflow-hidden">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          title="Empowering brands through innovation."
          description="At Xntric, we bring together top industry experts and cutting edge technology to elevate your brand’s digital presence to new heights."
          videoSrc="/Blog/hero-video.webm"
          join={true}
        />
      </div>
      <People />
      <OurMission />
      <Atmosphere />
      {/* <OurSocial /> */}
      <BigIdeas />
      <ContactForm />
    </main>
  );
};

export default CareersPage;
