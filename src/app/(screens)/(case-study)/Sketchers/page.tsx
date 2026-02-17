import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function Sketchers() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Skechers Middle East"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Sketchers/image1.png"
        bottomCenterText="Xntric by LPS partnered with Skechers Middle East, a flagship brand of the Apparel Group, to execute high-impact creative campaigns and brand films. Our expertise in conceptualization, storytelling, and production brought Skechers’ vision to life, ensuring strong market engagement across the Gulf region."
        desciption="Through a 360-degree creative approach, we developed and executed compelling campaigns, including the back-to-school campaign."
      />
      <CaseStudySection2
        heading="The power of strategic storytelling"
        sec2Desc="We delivered a compelling back-to-school campaign, featuring hero videos and high-quality photography that brought Skechers vibrant brand story to life. Our 360-degree creative strategy ensured consistency across all campaign assets, strengthening Skechers digital presence and enhancing brand recall in the Gulf region. From conceptualization to execution, we seamlessly crafted a visually engaging and strategically aligned campaign that resonated with the target audience."
        overviewPara="Our goal was to enhance Skechers’ regional presence through a holistic creative execution. From ideation to final production, we crafted hero videos and photography that resonated with the brand’s audience, ensuring an impactful and cohesive digital presence."
        image="/CaseStudies/Sketchers/image2.png"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & how we overcame them"
        heading="Challenges & How We Overcame Them"
        isButton={false}
        services={[
          "Brand messaging & audience engagement balance",
          "Consistency across multiple campaign assets",
          "Delivering high-quality Production within tight timelines",
        ]}
        content={[
          "The challenge was to create a campaign that balances brand messaging with audience engagement. We leveraged engaging visuals, youthful energy, and storytelling techniques to create a seamless narrative that resonated with the target audience.",
          "The challenge was to ensure consistency across multiple campaign assets. A unified creative strategy was implemented across all platforms, ensuring a cohesive brand voice and visual identity.",
          "The challenge was to deliver high-quality production within tight timelines. Through meticulous planning and a dedicated production team, we executed a flawless campaign rollout on schedule.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        video="/CaseStudies/Sketchers/video1.webm"
        video2="/CaseStudies/Sketchers/video2.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Back-to-school campaign",
          "Hero videos and high-quality photography.",
          "360-degree creative strategy",
          "Strong digital presence",
          "Conceptualization, ideation, and execution",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
