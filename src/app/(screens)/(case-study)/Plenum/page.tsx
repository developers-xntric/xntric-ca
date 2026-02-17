import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Plenum() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Plenum Technologies"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Plenum/1.jpg"
        bottomCenterText="Plenum Technologies, a Dubai-based IT in-housing company, approached us with the need for a complete rebranding strategy. As a leading provider of emerging technology solutions, they wanted their brand identity to reflect their innovative, future-forward approach"
        desciption="Our mission was to create a powerful and cohesive brand that positioned Plenum technologies as a trusted name in AI, Machine Learning, ERPs, Cloud, Cybersecurity, and IT solutions in the Middle East."
      />
      <CaseStudySection2
        sec2Desc="Plenum Technologies sought a complete rebrand to reflect its expertise in AI, Machine Learning, Cloud, Cybersecurity, and enterprise solutions. Despite being a leading IT solutions provider, its brand identity lacked a strong presence in the competitive Middle Eastern tech industry."
        overviewPara="Our goal was to craft a compelling brand strategy, modern visual identity, and refined messaging that positioned Plenum Technologies as an industry innovator. Through a strategic rebranding process, we transformed their brand into a cohesive, digital-first identity that resonates with businesses looking for cutting-edge IT solutions."
        heading="Revitalizing a tech leader’s identity"
        image="/CaseStudies/Plenum/2.png"
        reverse={true}
        image2="/CaseStudies/Plenum/3.png"
        image3="/CaseStudies/Plenum/4.png"
        image4="/CaseStudies/Plenum/5.png"
        image5="/CaseStudies/Plenum/6.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Challenges faced by Plenum Technologies"
        isButton={false}
        services={[
          "Lack of a strong brand identity",
          "Competitive market positioning",
          "Fragmented communication & messaging",
          "Digital-first rebranding",
        ]}
        content={[
          "Plenum Technologies had built a solid reputation in the IT industry, but their brand image did not reflect their cutting-edge expertise. Their visual identity, messaging, and overall positioning needed a complete transformation to align with their high-value service offerings",
          "With over 120+ IT outsourcing firms in the region, it was essential to differentiate Plenum Technologies. The brand had to establish a unique positioning that highlighted their core strengths—innovation, expertise, and customer-centric IT solutions.",
          "Plenum Technologies had various service offerings, from AI and DevOps to cybersecurity and cloud solutions, but their communication was not cohesive. They needed a strong brand voice and messaging strategy that effectively conveyed their value proposition to businesses.",
          "As a tech company, Plenum Technologies required a brand identity that was optimized for digital platforms. The challenge was to create a sleek, modern, and tech-driven brand that resonated across websites, social media, and digital marketing channels.",
        ]}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/Plenum/7.png" />
      <CaseStudySection4
        image1="/CaseStudies/Plenum/8.png"
        image2="/CaseStudies/Plenum/9.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Plenum;
