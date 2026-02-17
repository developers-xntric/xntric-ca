import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function Delmonte() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Del Monte’s digital presence"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        isdelmonte={true}
        bottomVideo="/CaseStudies/Delmonte/video1.webm"
        bottomCenterText=" Del Monte is a household name in the food and beverage industry, known for its premium quality and innovation. To further strengthen its market presence in the Middle East, Del Monte required a comprehensive 360-degree marketing strategy that would not only enhance visibility but also drive consumer engagement through cutting-edge digital initiatives."
        desciption="As the lead agency, we took charge of Del Monte’s entire digital ecosystem, including social media management, influencer collaborations, and product marketing."
      />

      <CaseStudySection2
        heading="Crafting a seamless digital experience"
        sec2Desc="We implemented a 360-degree digital strategy to elevate Del Monte’s online presence, combining high-quality content creation with vibrant product shoots and engaging social media templates. Through influencer collaborations, we enhanced brand credibility and expanded audience reach. Additionally, targeted paid campaigns were executed to boost brand awareness and drive sales, ensuring a strong market presence."
        overviewPara="Our approach was centered around leveraging digital innovation to connect Del Monte with its audience more effectively. From engaging content creation to strategic brand partnerships, we worked towards enhancing its market position, increasing engagement, and driving brand loyalty."
        video="/CaseStudies/Delmonte/video2.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & how we overcame them"
        heading="Challenges & wow we overcame them"
        isButton={false}
        services={[
          "Limited digital engagement",
          "Product visibility & awareness",
          "Lack of influencer collaboration",
        ]}
        content={[
          "Del Monte needed a stronger digital footprint to maintain relevance in an increasingly competitive market.",
          "With a vast product portfolio, ensuring each category received the attention it deserved was a challenge.",
          "To establish a deeper connection with consumers, we initiated strategic influencer partnerships, ensuring Del Monte’s message reached the right audience through authentic and engaging storytelling",
        ]}
        isArrow={false}
        marginTop={true}
        width="2xl:w-[28%]"
      />
      <CaseStudySection3
        image="/CaseStudies/Delmonte/image3.png"
        video="/CaseStudies/Delmonte/video3.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "360-degree digital strategy",
          "High-quality content creation",
          "Targeted content marketing",
          "Influencer collaborations",
          "Targeted paid campaigns",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
