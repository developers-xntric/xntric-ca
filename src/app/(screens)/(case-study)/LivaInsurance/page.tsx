import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { crestlineContent, crestlineService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Liva Insurance Project – Branding by Xntric",
  description: "See how Xntric partnered with Liva Insurance to create impactful branding, digital marketing, and customer engagement strategies.",
};
function Crestline() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Liva Insurance tourism"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <div className="xl:mt-40">
        <SecondSectionCase
          caseStudyBottomSection={true}
          data={CaseData}
          bottomVideo="/CaseStudies/LivaInsurance/video1.webm"
          bottomCenterText="Liva Insurance emerged as the largest insurance provider in the GCC after merging four individual entities. To ensure a seamless transition, Xntric by LPS was entrusted with creating an integrated digital and social experience that resonated across six diverse markets. Our task was to establish a strong, unified brand identity while maintaining adaptability for different cultural and linguistic nuances."
          desciption="As the lead agency for communications, our goal was to develop a brand presence that was both modern and locally relevant."
        />
      </div>

      <CaseStudySection2
        heading="Crafting a cohesive identity"
        sec2Desc="We successfully crafted a powerful and unified brand identity that positioned Liva Insurance as a market leader in the GCC. Our approach involved developing localized campaigns tailored for six different countries, ensuring cultural and linguistic relevance while maintaining brand consistency. Through a seamless execution across 30+ platforms, we maximized engagement and visibility, resulting in an impressive 20M+ launch reach, making it one of the most impactful insurance brand rollouts in the region."
        overviewPara="Liva Insurance needed a coherent, impactful, and scalable digital presence after the merger of four insurance providers into one unified brand. Our role was to define its brand identity, tone, and messaging, ensuring consistency across multiple GCC countries. We created a visually compelling and culturally adaptable brand presence that successfully resonated with diverse audiences."
        video="/CaseStudies/LivaInsurance/video2.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Your financial data, simplified and secured"
        isButton={false}
        services={crestlineService}
        content={crestlineContent}
        isArrow={false}
        marginTop={true}
        width="2xl:w-[30%] lg:w-[22%]"
      />
      <CaseStudySection3
        image="/CaseStudies/LivaInsurance/image2.png"
        video="/CaseStudies/LivaInsurance/video3.webm"
        isBottom={true}
      />
      <CaseStudySection4 bigImage="/CaseStudies/LivaInsurance/image5.png" />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Crestline;
