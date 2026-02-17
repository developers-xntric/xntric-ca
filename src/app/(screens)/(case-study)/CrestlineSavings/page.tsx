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

function Crestline() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Crestline FinTech Web application"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/CrestlineSavings/image1.png"
        bottomCenterText="Crestline Credit needed a FinTech web application that simplifies alternative credit solutions for businesses and investors. We developed an interactive platform that enables users to monitor investments, analyze credit opportunities, and access real-time financial data with dynamic dashboards."
        desciption="By prioritizing security, performance, and ease of use, we helped Crestline offer a seamless, data-driven experience tailored for modern finance professionals."
      />
      <CaseStudySection2
        heading="Empowering smarter investments"
        sec2Desc="Crestline, a leading financial solutions provider, needed a cutting-edge FinTech web application to streamline alternative credit solutions for businesses and investors. The goal was to develop a platform that simplifies investment monitoring, enhances credit analysis, and provides real-time financial insights. By integrating robust security measures, seamless navigation, and dynamic dashboards, we created a high-performance digital experience tailored for finance professionals."
        overviewPara="Crestline Credit sought a web application that would simplify alternative credit solutions for businesses and investors. Our solution was to create an interactive platform that allowed users to easily monitor investments, analyze credit opportunities, and access real-time financial data through dynamic dashboards. The goal was to provide a data-driven experience that was both secure and high-performing, enabling modern finance professionals to make informed decisions quickly."
        image="/CaseStudies/CrestlineSavings/image2.png"
        reverse={true}
        image2="/CaseStudies/CrestlineSavings/image3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Your financial data, simplified and secured"
        isButton={false}
        services={crestlineService}
        content={crestlineContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/CrestlineSavings/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/CrestlineSavings/image5.png"
        image2="/CaseStudies/CrestlineSavings/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Crestline;
