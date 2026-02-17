import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { dubaiContent, dubaiService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function Crestline() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Dubai Economy and Tourism (DET)"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/DubaiEconomy/image1.jpg"
        bottomCenterText="Xntric by LPS partnered with Dubai Economy & Tourism (DET) as the global short-form video and social media content partner for Visit Dubai. Managing content across UAE, KSA, South Asia, and Western Europe, our goal was to strengthen Dubai’s position as the world’s top travel destination through trend-driven and high-impact social media content."
        desciption="Through strategic content curation and agile execution, Xntric by LPS successfully amplified Dubai’s digital footprint."
      />
      <CaseStudySection2
        heading="Dubai, digitally unmatched"
        sec2Desc="Xntric by LPS was entrusted with the task of developing trend-driven short-form video content for visit Dubai’s social media platforms, ensuring high engagement, virality, and brand storytelling."
        overviewPara="Dubai needed a dynamic and engaging social media presence that would captivate travelers worldwide. LPS took on the challenge of creating culturally relevant and high-performing short-form video content tailored for Instagram and TikTok. By leveraging viral trends, influencer collaborations, and data-driven insights, we successfully amplified Dubai’s brand across global markets."
        video="/CaseStudies/DubaiEconomy/Video1.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Challenges & How We Overcame Them"
        isButton={false}
        services={dubaiService}
        content={dubaiContent}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        image="/CaseStudies/DubaiEconomy/image4.png"
        video="/CaseStudies/DubaiEconomy/Video2.webm"
        isBottom={true}
      />
      <CaseStudySection4 />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Crestline;
