import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { ajmalContent, ajmalService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ajmal Perfumes Project – Marketing Excellence",
  description: "View Xntric’s creative collaboration with Ajmal Perfumes, crafting elegant branding and marketing campaigns that inspire and captivate.",
};
function AjmalPerfumes() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Ajmal Perfumes"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData} 
        bottomImage="/CaseStudies/AjmalPerfumes/image1.png"
        bottomCenterText="Ajmal Perfumes, a household name in the world of luxury fragrances, sought to elevate their online presence to match their rich heritage and timeless appeal. They needed more than just an e-commerce platform—they required a digital experience that captured the essence of their brand and resonated with fragrance enthusiasts worldwide."
        desciption="We designed an immersive e-commerce website that blended storytelling with technology, allowing customers to explore the depth of each scent through high-quality visuals and shopping journey."
      />
      <CaseStudySection2
        heading="Ajmal perfumes Elite receptions and events from a pro event agency"
        image="/CaseStudies/AjmalPerfumes/image2.png"
        reverse={true}
        image2="/CaseStudies/AjmalPerfumes/image3.png"
        overviewPara="Ajmal Perfumes, a prestigious name in luxury fragrances, sought to enhance its digital presence by creating an immersive e-commerce platform that reflected its heritage while offering a seamless online shopping experience."
        sec2Desc="The new Ajmal Perfumes website elevated the brand’s digital presence, offering an enriched shopping experience that blended storytelling with seamless functionality."
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenge of creating a seamless e-commerce experience"
        isButton={false}
        services={ajmalService}
        content={ajmalContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/AjmalPerfumes/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/AjmalPerfumes/image5.png"
        image2="/CaseStudies/AjmalPerfumes/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default AjmalPerfumes;
