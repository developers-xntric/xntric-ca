import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Treva() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Treva"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Treva/image1.png"
        bottomCenterText="Treva, a beloved domestic brand in Saudi Arabia, sought to create awareness among its core audience—discerning homemakers. However, reaching and engaging this audience in a modern, relevant manner presented a unique challenge."
        desciption="Homemakers in the Kingdom act as home economists, making informed purchasing decisions that maximize value. To tap into this insight, Treva took an unconventional approach—introducing a rap song that celebrated their economic awareness and smart decision-making."
      />
      {/* <CaseStudyHero
        title="Case Study"
        heading="Treva"
        desciption="Treva, a beloved domestic brand in Saudi Arabia, sought to create awareness among its core audience—discerning homemakers. However, reaching and engaging this audience in a modern, relevant manner presented a unique challenge."
        showSlider={false}
        bottomImage="/CaseStudies/Treva/image1.png"
        caseStudyBottomSection={true}
        bottomCenterText="Homemakers in the Kingdom act as home economists, making informed purchasing decisions that maximize value. To tap into this insight, Treva took an unconventional approach—introducing a rap song that celebrated their economic awareness and smart decision-making."
        isButton={true}
        gap="less"
        data={CaseData}
      /> */}
      <CaseStudySection2
        heading="Engaging Saudi homemakers with a modern twist"
        sec2Desc="Understanding that homemakers are a difficult demographic to reach through traditional marketing channels, we devised a strategy that would not only capture their attention but also celebrate their role in a way that resonated with them. Instead of conventional advertising, we opted for a high-energy, engaging rap song that spoke their language—mixing modern entertainment with brand messaging."
        overviewPara="Treva, a well-loved domestic brand in Saudi Arabia, aimed to enhance brand awareness among homemakers—a traditionally hard-to-reach audience. Understanding that these homemakers see themselves as home economists, Treva leveraged this insight to craft a campaign that resonated deeply. By using an innovative and culturally relevant approach—a rap song that celebrated their smart purchasing decisions—the brand successfully engaged its target audience in an entertaining yet meaningful way. The result was a highly impactful campaign that not only increased brand visibility but also drove significant growth in sales and community engagement"
        video="/CaseStudies/Treva/video1.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Celebrating homemakers with a fresh approach"
        isButton={false}
        services={[
          "136% Increase in business value",
          "138% Growth in sales volume",
          "13 Million+ Views",
          "Strong brand awareness & connection",
        ]}
        content={[
          "This remarkable growth reflects a significant uplift in brand equity, consumer trust, and overall market positioning. Treva’s campaign not only strengthened its brand image but also increased customer loyalty, making it a household name among Saudi homemakers.",
          "The campaign directly influenced consumer purchasing behavior, driving a sharp rise in product sales. By making homemakers feel valued and understood, Treva successfully converted engagement into measurable business success.",
          "London Dairy was seamlessly integrated into 124 different games across multiple genres, including action, adventure, sports, and simulation. This variety ensured that we reached a diverse player base, from casual mobile gamers to hardcore console enthusiasts. No matter what the game, London Dairy was there, making every gaming session cooler and more enjoyable.",
          "The rap song struck a chord with the audience, leading to an overwhelming 13 million+ video views across digital platforms. The creative execution, combined with an authentic connection to the audience’s mindset, ensured high watch times and repeat engagement.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection4
        image1="/CaseStudies/Treva/image2.png"
        image2="/CaseStudies/Treva/image3.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Treva;
