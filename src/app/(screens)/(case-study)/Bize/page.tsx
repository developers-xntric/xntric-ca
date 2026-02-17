"use client";
import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { bizeContent, bizeService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

export default function Bize() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Bize"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Bize/image1.png"
        bottomCenterText="Bize is a dynamic productivity business mobile application designed for modern entrepreneurs and teams. We built an intuitive app that streamlines task management, enhances team collaboration, and automates workflows—all in one place. With real-time notifications, seamless integrations, and smart goal-setting features, Bize transforms the way businesses operate, boosting efficiency and ensuring teams stay on track."
        desciption="Integrating features such as invoicing, expense tracking, and planning tools into a cohesive and user-friendly interface requires a strategic approach to ensure functionality and intuitive user experience."
      />

      <CaseStudySection2
        heading="Bize: simplifying business management for modern teams"
        image="/CaseStudies/Bize/image2.png"
        image2="/CaseStudies/Bize/image3.png"
        sec2Desc="Real-time synchronization is crucial in such applications, as it ensures that all features work harmoniously, providing instant updates and notifications across all functionalities. This immediacy enhances user engagement and allows for timely decision-making, which is vital in a business context. Implementing robust security measures is equally important, as these applications handle sensitive business data."
        overviewPara="Bize is an all-in-one productivity application designed to empower modern entrepreneurs and teams by streamlining various business processes into a single, intuitive platform. Recognizing the challenges of juggling multiple tools for invoicing, document scanning, expense tracking, and daily planning, Bize integrates these essential features to enhance efficiency and collaboration. The app offers real-time notifications, seamless integrations, and smart goal-setting capabilities, transforming the way businesses operate and ensuring teams stay aligned and productive."
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="All your business tools in one powerful app"
        isButton={false}
        services={bizeService}
        content={bizeContent}
        isArrow={false}
        width="2xl:w-[27%]"
      />
      <CaseStudySection3 image="/CaseStudies/Bize/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/Bize/image5.png"
        image2="/CaseStudies/Bize/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
