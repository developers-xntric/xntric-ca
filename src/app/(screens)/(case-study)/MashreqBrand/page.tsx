import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function DolbyAtmos() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Mashreq’s Brand"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomVideo="/CaseStudies/Mashreq/video1.webm"
        bottomCenterText="In the fast-paced digital era, Mashreq sought a dynamic, innovative approach to engage its audience through compelling brand campaigns and video storytelling. LPS took on the challenge to craft a seamless, multi-platform content strategy that positioned Mashreq as a progressive financial institution."
        desciption="Our collaboration with Mashreq was centered around comprehensive product campaigns that merged digital, social, and video storytelling."
      />
      <CaseStudySection2
        heading="A 360° approach to brand engagement"
        sec2Desc="Our collaboration with Mashreq was centered around comprehensive product campaigns that merged digital, social, and video storytelling. By orchestrating a cohesive brand narrative, we helped Mashreq create meaningful connections with its audience while reinforcing its commitment to financial security and empowerment."
        overviewPara="Mashreq sought to establish a powerful online presence that would not only connect with its audience but also reinforce its position as a progressive financial institution. The goal was to create visually compelling campaigns that captured attention through high-quality production, dynamic storytelling, and immersive visuals. At the same time, the messaging needed to be strategically aligned with Mashreq’s core brand values—trust, innovation, and customer empowerment."
        video="/CaseStudies/Mashreq/video2.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & How we overcame them"
        heading="Challenges & How we overcame them"
        isButton={false}
        services={[
          "Crafting a distinct brand identity",
          "Driving engagement in a competitive Market",
          "Communicating financial security effectively",
        ]}
        content={[
          "Mashreq required a fresh, modernized approach to storytelling that differentiated it from competitors. We developed bold visual themes, strong messaging, and relatable narratives to bring its brand to life",
          "In a crowded digital space, standing out was critical. Our solution? A data-driven content strategy, leveraging interactive videos, user-driven storytelling, and high-impact creatives to enhance audience participation.",
          "Trust is paramount in banking. We crafted clear, empowering messages that showcased Mashreq’s commitment to fraud prevention, financial literacy, and customer protection, ensuring a reassuring yet forward-thinking brand persona.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection4
        bigImage="/CaseStudies/Mashreq/image1.png"
        cardData={[
          "Conceptualized and executed high-impact campaigns",
          "Produced engaging video content",
          "Targeted content marketing",
          "Developed a cohesive content strategy",
          "Enhanced brand perception",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
