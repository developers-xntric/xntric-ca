import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { revoultContent, revoultService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function Revolut() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Revoult"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Revolut/image1.png"
        bottomCenterText="Revoult is shaking up the financial landscape with its FinTech mobile application, offering seamless digital banking, smart budgeting, and secure transactions. Our task was to design a mobile app that combined sleek design with powerful functionality, ensuring users could manage their finances effortlessly. The app’s intuitive interface allows users to track spending, send money across borders, and access personalized budgeting insights powered by AI."
        desciption="We designed an intuitive, high-security app that empowers users to track expenses, send money globally, and make informed financial decisions with AI-driven insights."
      />
      <CaseStudySection2
        heading="Smarter banking, seamless experience"
        sec2Desc="Security was a top priority, so we implemented multi-layered encryption and instant notifications to give users peace of mind while managing their finances. The app’s modern UI and seamless navigation make it easy for users to stay on top of their financial goals while enjoying a secure, user-friendly experience."
        overviewPara="Revoult is redefining digital banking with a seamless, secure, and intuitive mobile application. They needed a robust FinTech platform that would empower users to manage their finances effortlessly—whether tracking expenses, making global transactions, or receiving AI-driven financial insights. Our goal was to develop an application that combined security, speed, and usability while delivering a modern digital banking experience."
        image="/CaseStudies/Revolut/image2.png"
        reverse={true}
        image2="/CaseStudies/Revolut/image3.png"
      />
      <ServicesLists
        textwitshadow="Our Challenges"
        heading="Finance at Your Fingertips"
        isButton={false}
        services={revoultService}
        content={revoultContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/Revolut/image4.jpg" />
      <CaseStudySection4
        image1="/CaseStudies/Revolut/image5.png"
        image2="/CaseStudies/Revolut/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Revolut;
