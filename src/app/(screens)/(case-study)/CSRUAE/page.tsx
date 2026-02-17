import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function CSRUAE() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="CSR UAE Fund"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/CSR/1.png"
        bottomCenterText="CSR UAE Fund is a federal authority responsible for setting governance frameworks and directing corporate social responsibility (CSR) contributions toward national priority initiatives in the UAE."
        desciption="The organization ranks and rewards businesses based on their CSR efforts while enabling relevant authorities to regulate socially responsible corporate practices."
      />
      <CaseStudySection2
        sec2Desc="By developing a cohesive and authoritative brand from scratch, we helped CSR UAE Fund establish itself as the benchmark for corporate social responsibility in the UAE. Our strategic branding approach ensured that their message was clear, their identity was strong, and their impact was amplified across industries."
        overviewPara="CSR UAE Fund is a federal authority that sets the governance framework for Corporate Social Responsibility in the UAE, directing business contributions toward national priority initiatives. Our goal was to build a brand identity that reflects the Fund’s mission, positioning it as the leading entity for CSR governance and corporate engagement in the UAE. From conceptualizing a brand strategy to designing a strong visual identity, we crafted a branding system that resonates with businesses, stakeholders, and the community."
        heading="Transforming CSR awareness into action"
        image="/CaseStudies/CSR/2.png"
        reverse={false}
        image2="/CaseStudies/CSR/3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Challenges faced in branding CSR UAE fund"
        isButton={false}
        services={[
          "Establishing a unique identity",
          "Aligning with UAE’s national vision",
          "Engaging diverse stakeholders",
          "Building awareness from scratch",
        ]}
        content={[
          "CSR UAE Fund was a newly formed entity with no prior brand recognition. The challenge was to create a distinctive brand identity that positioned it as the leading authority in Corporate Social Responsibility (CSR) governance in the UAE. ",
          "The UAE has a strong focus on sustainability, corporate responsibility, and social development, aligning with global Sustainable Development Goals (SDGs). The brand identity for CSR UAE Fund needed to reflect these priorities and integrate seamlessly with the UAE’s overall vision for social and economic progress.",
          "CSR UAE Fund interacts with multiple stakeholders, including government entities, private corporations, NGOs, and the general public. The challenge was to create a brand that speaks effectively to all these audiences.",
          "Since CSR UAE Fund was a new organization, it had no established reputation or audience. A major challenge was increasing brand visibility and positioning it as the go-to authority for CSR in the UAE.",
        ]}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/CSR/7.png" />
      <CaseStudySection4
        image1="/CaseStudies/CSR/8.png"
        image2="/CaseStudies/CSR/9.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default CSRUAE;
