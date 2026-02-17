import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function DubaiSilicon() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Dubai Silicon oasis authority"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/DubaiSilicon/image1.png"
        bottomCenterText="Dubai Silicon oasis authority (DSOA) was traditionally known as a commercial office space. Our goal was to reshape its brand perception, positioning it as a dynamic and thriving lifestyle hub that seamlessly integrates corporate, retail, and residential spaces."
        desciption="We crafted a comprehensive strategy to redefine DSOA’s brand presence. By leveraging creative storytelling,"
      />

      <CaseStudySection2
        heading="A 360-degree strategic shift"
        sec2Desc="We strategically repositioned DSOA, transforming it into a holistic lifestyle destination with a compelling 360-degree communication strategy that ensured a strong and unified brand presence. Through engaging video production and digital storytelling, we amplified the brand’s appeal, while a dynamic social media and content strategy drove engagement and increased visibility across platforms."
        overviewPara="Xntric by LPS took a shapeshift approach to transform DSOA’s brand identity. Through meticulous research and creative execution, we uncovered the brand’s core essence, seamlessly integrating its diverse facets. Our strategic communication efforts amplified DSOA’s brand presence across all touchpoints, ensuring a cohesive and compelling narrative."
        video="/CaseStudies/DubaiSilicon/Video-1.mp4"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & how we overcame them"
        heading="Challenges & how we overcame them"
        isButton={false}
        services={[
          "Limited brand perception",
          "Diverse brand entities",
          "Lack of digital engagement",
        ]}
        content={[
          "DSOA was primarily seen as a corporate hub. We redefined its image through engaging campaigns, high-quality content, and social media storytelling to showcase its lifestyle aspects.",
          "The brand needed a unified voice across corporate, residential, and retail sectors. We developed a cohesive communication strategy that highlighted each segment while maintaining a consistent brand tone.",
          "DSOA’s online presence needed revitalization. We introduced immersive social media content, interactive campaigns, and video production to increase engagement and brand recall.",
        ]}
        isArrow={false}
        marginTop={true}
        width="2xl:w-[30%] lg:w-[50%]"
      />
      <CaseStudySection3
        video="/CaseStudies/DubaiSilicon/video1.mp4"
        video2="/CaseStudies/DubaiSilicon/video2.mp4"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Holistic Lifestyle Repositioning",
          "360° Brand Communication",
          "Engaging Visual Storytelling",
          "Dynamic Digital Presence",
          "Targeted paid campaigns",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
