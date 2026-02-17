import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { gjContent, gjService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "GJ Properties Project – Marketing by Xntric",
  description: "Discover how Xntric’s marketing, branding, and design expertise helped GJ Properties elevate their image and stand out in a competitive market.",
};
function GjProperties() {
  return (
    <div className="max-w-screen">
      
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Gj properties website"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <div className="lg:mt-20">      
        <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/GjProperties/image1.png"
        bottomCenterText="GjProperties is a powerhouse in real estate, offering high-end properties for buyers and investors. We designed a website that acts as a virtual showroom, featuring immersive property visuals, interactive 3D tours, and smart filtering options."
        desciption="The intuitive design allows potential buyers to explore listings effortlessly, schedule viewings, and connect with agents—all from the comfort of their homes."
      />
      </div>
      <CaseStudySection2
        heading="A high-end real estate website"
        sec2Desc="We built a visually immersive and functionally powerful website tailored to the luxury real estate sector."
        overviewPara="GjProperties is a leading real estate firm that specializes in luxury residential and commercial properties. With a focus on premium developments, investment opportunities, and seamless property transactions, the company needed a cutting-edge website to showcase its portfolio and engage potential buyers."
        image="/CaseStudies/GjProperties/image2.png"
        reverse={true}
        image2="/CaseStudies/GjProperties/image3.png"
      />
      <ServicesLists
        textwitshadow="Our Challenges"
        heading="The Challenge of Creating a Seamless e-commerce Experience"
        isButton={false}
        services={gjService}
        content={gjContent}
        isArrow={false}
        width=" 2xl:w-[30%] lg:w-[28%] "
      />
      <CaseStudySection3 image="/CaseStudies/GjProperties/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/GjProperties/image5.png"
        image2="/CaseStudies/GjProperties/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default GjProperties;
