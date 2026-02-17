import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { ftContent, ftService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function FtPlatinum() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Ft Platinum"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/FtPlatinum/image1.png"
        bottomCenterText="FT Platinum offers a wide array of government services in the UAE, including immigration assistance, company establishment, labor services, tax registration, notary services, and Emirates ID processing."
        desciption="To enhance their service delivery, we developed a user-friendly website, an intuitive admin portal, and a dedicated staff portal."
      />

      <CaseStudySection2
        heading="Digitizing government service processing in the UAE"
        sec2Desc="It resulted in FT Platinum having enhanced operational efficiency along with an improved staff communication & task management. We created a high-performance website that elevated the brands digital presence."
        overviewPara="FTPlatinum is revolutionizing the way businesses and individuals interact with government services in the UAE. From company formation and tax registration to visa processing and regulatory compliance, FTPlatinum simplifies complex procedures, ensuring a hassle-free experience for users."
        image="/CaseStudies/FtPlatinum/image2.png"
        reverse={true}
        image2="/CaseStudies/FtPlatinum/image3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenge of simplifying bureaucratic complexity"
        isButton={false}
        services={ftService}
        content={ftContent}
        isArrow={false}
        width="2xl:w-[30%] lg:w-[30%]"
      />
      <CaseStudySection3 image="/CaseStudies/FtPlatinum/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/FtPlatinum/image5.png"
        image2="/CaseStudies/FtPlatinum/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default FtPlatinum;
